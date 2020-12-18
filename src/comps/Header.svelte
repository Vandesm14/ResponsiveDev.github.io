<script>
	export let title = '', 
	description = '',
	button = '',
	href = '';
</script>

<style>
div {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 4vh 10vw;
  background-color: #5a507e;
  color: #FAFAFA;
  text-align: center;
  font-size: 1.6rem;
}

div > * {
  margin: 30px 0;
}

a {
  padding: 10px 20px;
  width: max-content;
  border-radius: 1000px;
  background-color: #FAFAFA;
  color: #5a507e;
  text-decoration: none;
  transition: 150ms ease-out;
}
a:hover {
  box-shadow: 0 4px 20px #00000044;
  transform: scale(1.1);
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
	<a href="{href}">{button}</a>
</div>