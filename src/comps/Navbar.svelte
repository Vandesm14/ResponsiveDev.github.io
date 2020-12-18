<script>
	import Button from './Button.svelte';
</script>

<style>
div {
  z-index: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: -4vh;
  padding: 1vh 1vw;
  background-color: #5a507e;
  color: white;
  text-align: center;
  font-size: 1.2rem;
}

a {
  display: flex;
}

img {
  margin: 10px;
  height: calc(1.2rem + 18px);
  border-radius: 1000px;
  text-decoration: none;
  transition: 150ms ease-out;
}
</style>

<svelte:head>
	<link rel="icon" href="/fav.png">

	<!-- Primary Meta Tags -->
	<meta name="title" content="Responsive">
	<meta name="description" content="Two guys talk with the community about all things tech; from frameworks to tech pop-tarts, we've got you covered.">
	<meta name="theme-color" content="#5A507E">

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://responsivedev.github.io/">
	<meta property="og:title" content="Responsive">
	<meta property="og:description" content="Two guys talk with the community about all things tech; from frameworks to tech pop-tarts, we've got you covered.">
	<meta property="og:image" content="fav.png">

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:url" content="https://responsivedev.github.io/">
	<meta property="twitter:title" content="Responsive">
	<meta property="twitter:description" content="Two guys talk with the community about all things tech; from frameworks to tech pop-tarts, we've got you covered.">
	<meta property="twitter:image" content="fav.png">
</svelte:head>

<div class="navbar">
	<a href="/"><img src="/fav.png" alt="Logo"></a>
	<Button href="/">Home</Button>
	<Button href="/podcast">Podcast</Button>
	<Button href="/events">Events</Button>
</div>