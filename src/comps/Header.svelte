<script>
	import Button from './Button.svelte';
	export let title = '', 
	description = '',
	button = {};
</script>

<style>
div {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 4vh 10vw;
  background-color: #5a507e;
  color: #fafafa;
  text-align: center;
  font-size: 1.6rem;
}

div > * {
  margin: 30px 0;
}

div > *:empty {
  display: none;
}

p {
	line-height: 2.2rem;
}
</style>

<div class="header">
	<h1>{title}</h1>
	{#if description}
	<p>{description}</p>
	{:else}
	<p>
		<slot></slot>
	</p>
	{/if}
	<Button {...button}>{button.title}</Button>
</div>