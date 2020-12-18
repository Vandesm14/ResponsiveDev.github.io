<script>
	import Navbar from './comps/Navbar.svelte';
	import Header from './comps/Header.svelte';
	import Article from './comps/Article.svelte';

	let header = {
		title: 'Welcome to Responsive!'
	};
	let about = {
		title: 'About Us'
	};
</script>

<Navbar />
<Header {...header}>
	Responsive is a community which is related to development and technology. Whether you need help, are looking to share a project, or are just looking to be in an active community, we are your north star!
</Header>
<Article {...about}>
	Welcome to Responsive, a <a href="https://discord.io/Responsive" target="_blank">community</a> based on tech and development of all kinds! Whether you want to share your ideas, assist others in their coding endeavors, or just want to mingle amongst the masses, this is the place for you! At Responsive, we host many <a href="/events">events</a> that range in variety: from <a href="https://twitch.tv/vandesm14" target="_blank">livestreams</a> and <a href="/podcast">podcasts</a> to code jams and hackathons. Get comfy, settle in, and begin your journey with the Responsive community!
</Article>