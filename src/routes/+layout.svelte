<script lang="ts">
  import './main.css'
	import Footer from '$lib/components/Footer.svelte'
  import ThemeButton from '$lib/components/ThemeButton.svelte'
</script>

<div class="main">
	<div class="hover">
    <ThemeButton />
    <main class="container">
      <slot />
    </main>
    <Footer />
  </div>
</div>