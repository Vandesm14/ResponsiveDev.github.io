<script>
	import Header from './comps/Header.svelte';
	import Article from './comps/Article.svelte';

	let header = {
		title: 'Welcome to Responsive!',
		button: 'Join Us',
		href: ''
	};
	let about = {
		title: 'About Us',
		button: 'Join Us',
		href: ''
	};
</script>

<Header {...header}>
	Two guys talk with the community about all things tech; from frameworks to tech pop-tarts, we've got you covered.
</Header>
<Article {...about}>
	Hello World
</Article>