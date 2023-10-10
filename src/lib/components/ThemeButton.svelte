<script>
	import { browser } from '$app/environment'
	import { onMount } from 'svelte'

  let showTheme = ''

	onMount(() => {
    let theme = localStorage.getItem('theme')

		if (theme === undefined) {
			showTheme = '☀️'
		} else {
			if (theme == 'dark') {
        document.body.classList.add('dark')
				showTheme = '🌙'
			} else {
				showTheme = '☀️'
			}
		}
	})

	function toggle() {
		if (browser) {
			document.body.classList.toggle('dark')

			if (document.body.classList[0] == 'dark') {
				showTheme = '🌙'
				localStorage.setItem('theme', 'dark')
			} else {
				showTheme = '☀️'
				localStorage.setItem('theme', 'light')
			}
		}
	}
</script>

<button on:click={toggle} id="theme">
	{showTheme}
</button>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&display=swap');

	#theme {
		font-family: 'Noto Color Emoji', sans-serif !important;
		background: transparent;
		border: 1px solid #2e2f2f;
		border-radius: 10px;
		padding: 0.5rem 0.5rem;
		font-size: 24px;

		position: fixed;
		right: 20px;
		top: 20px;
	}

	#theme:hover {
		background: rgba(0, 0, 0, 0.4);
		cursor: pointer;
	}
</style>
