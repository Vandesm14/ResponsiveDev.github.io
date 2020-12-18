<script>
	import Header from './comps/Header.svelte';

	let header = {
		title: 'Welcome to Responsive!',
		description: `Two guys talk with the community about all things tech; from frameworks to tech pop-tarts, we've got you covered.`
	};
</script>

<Header {...header}/>