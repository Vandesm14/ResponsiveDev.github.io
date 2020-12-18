<script>
	import Navbar from './comps/Navbar.svelte';
	import Header from './comps/Header.svelte';
	import Article from './comps/Article.svelte';
	import Button from './comps/Button.svelte';

	let header = {
		title: 'The Responsive Podcast',
		button: {
			title: 'Episodes',
			href: 'https://anchor.fm/responsive',
			icon: '/social/anchor.png',
			blank: true
		}
	};
</script>

<style>
</style>

<Navbar />
<Header {...header}>
	Two guys talk with the community about all things tech; from frameworks to tech pop-tarts, we've got you covered.
</Header>
<Article>
	The Responsive Podcast is a podcast that releases eposides at least two times a week with each episode being an hour and a half long. We enjoy sharing tips, tricks, and tools for everything development. Leon and I are widely open to feedback, so even simple suggestion such as to turn up one of our mics, please feel free to ask! At the bottom of this page, you will find the various ways to contact us.
</Article>
<Article title={'Social Links'}>
	<Button href="https://twitch.tv/Responsive" icon="/social/twitch.png">Twitch</Button>
	<Button href="https://twitter.com/Respdev" icon="/social/twitter.png">Twitter</Button>
	<Button href="https://discord.io/Responsive" icon="/social/discord.png">Discord</Button>
	<Button href="mailto:responsivedev@pm.me" icon="/social/email.png">Email</Button>
</Article>