<script>
	import Navbar from './comps/Navbar.svelte';
	import Header from './comps/Header.svelte';
	import Article from './comps/Article.svelte';
	import Cards from './comps/Cards.svelte';

	let header = {
		title: 'Welcome to Responsive!',
		button: {
			href: 'https://discord.io/Responsive',
			title: 'Join Us',
			icon: '/social/discord.png'
		}
	};
	let about = {
		title: 'About Us'
	};

	let cards = [
		{
			title: 'Discord',
			description: 'Our server has an active community of 100+ members. We all are here if you need help and are always willing to give feedback!',
			href: 'https://discord.io/Responsive'
		},
		{
			title: 'Events',
			description: 'We host a variety of weekly events such as hackathons, code jams, and even open discussions! All of these events are open to everyone regardless of join date!\n\nHello',
			href: '/events'
		},
		{
			title: 'Podcasts & Streams',
			description: 'We generally host a stream at least once per week and release a podcast episode twice per week.',
			href: '/podcast'
		}
	];
</script>

<Navbar />
<Header {...header}>
	Responsive is a community which is related to development and technology. Whether you need help, are looking to share a project, or are just looking to be in an active community, we are your north star!
</Header>
<Article {...about}>
	Welcome to Responsive, a <a href="https://discord.io/Responsive" target="_blank">community</a> based on tech and development of all kinds! Whether you want to share your ideas, assist others in their coding endeavors, or just want to mingle amongst the masses, this is the place for you! At Responsive, we host many <a href="/events">events</a> that range in variety: from <a href="https://twitch.tv/vandesm14" target="_blank">livestreams</a> and <a href="/podcast">podcasts</a> to code jams and hackathons. Get comfy, settle in, and begin your journey with the Responsive community!
</Article>
<Cards {cards}/>