<script>
	export let title = '', 
	description = '',
	button = '',
	href = '';
</script>

<style>
	.header {
		display: flex;
		text-align: center;
		background-color: blue;
	}
</style>

<div class="header">
	<h1>{title}</h1>
	<p>{description}</p>
	{#if button}
	<a href="{href}">{button}</a>
	{/if}
</div>