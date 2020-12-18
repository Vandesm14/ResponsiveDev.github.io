<script>
	import Navbar from './comps/Navbar.svelte';
	import Header from './comps/Header.svelte';
	import Article from './comps/Article.svelte';
	import Button from './comps/Button.svelte';

	let header = {
		title: 'The Responsive Podcast',
		button: 'View Episodes',
		href: 'https://anchor.fm/responsive'
	};
</script>

<style>
img {
	display: block;
  height: calc(1.2rem + 18px);
  border-radius: 1000px;
  text-decoration: none;
	transition: 150ms ease-out;
	margin-right: 6px;
}
</style>

<Navbar />
<Header {...header}>
	Two guys talk with the community about all things tech; from frameworks to tech pop-tarts, we've got you covered.
</Header>
<Article>
	<Button href="https://twitch.tv/Responsive">
		<img src="/social/twitch.png" alt="twitch">
		<span>Twitch</span>
	</Button>
	<Button href="https://twitter.com/Respdev">
		<img src="/social/twitter.png" alt="twitter">
		<span>Twitter</span>
	</Button>
	<Button href="https://discord.io/Responsive">
		<img src="/social/discord.png" alt="twitch">
		<span>Discord</span>
	</Button>
</Article>