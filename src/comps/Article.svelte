<script>
	import Button from './Button.svelte';
	export let title = '', 
	description = '',
	button = {};
</script>

<style>
div {
  display: flex;
  align-items: right;
  flex-direction: column;
  justify-content: center;
  padding: 0 10vw;
  background-color: #212121;
  color: #fafafa;
  font-size: 1.2rem;
}

div > * {
  margin: 30px 0;
}

div > *:empty {
  display: none;
}

h1 {
  margin-bottom: 0;
}

p {
	line-height: 2.2rem;
}
</style>

<div class="article">
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