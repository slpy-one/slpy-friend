<script lang="ts">
  import getDiscordUser from "$lib/modules/getUser";
	import { onMount } from "svelte"
  import { page } from "$app/stores";

  onMount(async () => {
    console.log(await getDiscordUser($page.url.pathname.replace('/@', '')))
  })

  const userID = ''
</script>

<svelte:head>
  <title>Friends - slpy.one</title>

  <meta name="description" content="Using your Discord userID and show profile :)">
  <meta name="author" content="dethz">
</svelte:head>

<div>
  a
</div>