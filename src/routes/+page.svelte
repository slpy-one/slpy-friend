<script lang="ts">
	import { browser } from "$app/environment"
	import { onMount } from "svelte"

  let theme: string | null = ''
  let discordID: string | null = ''

  onMount(() => {
    if (localStorage.getItem('theme') !== undefined) {
      theme = localStorage.getItem('theme')
    } else {
      theme = ''
    }
  })

  function search() {
    if (browser) {
      document.location.replace('/@' + discordID)
    }
  }
</script>

<svelte:head>
  <title>Friends - slpy.one</title>

  <meta name="description" content="Using your Discord userID and show profile :)">
  <meta name="author" content="dethz">
</svelte:head>

<div id="indexMain">
	<div class="card">
    <input type="text" placeholder="Discord ID" bind:value={discordID} />
    <br>
    <button on:click={search}>
      Search
    </button>
  </div>
</div>
