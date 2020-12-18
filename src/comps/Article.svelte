<script>
	export let title = '', 
	description = '',
	button = '',
	href = '';
</script>

<style>
div {
  display: flex;
  align-items: right;
  flex-direction: column;
  justify-content: center;
  padding: 0 10vw;
  height: 70vh;
  color: black;
  font-size: 1.6rem;
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

a {
  margin-right: auto;
  margin-left: auto;
  padding: 10px 20px;
  width: max-content;
  border-radius: 1000px;
  background-color: #5a507e;
  color: white;
  text-decoration: none;
  transition: 150ms ease-out;
}
a:hover {
  box-shadow: 0 4px 16px #00000033;
  transform: scale(1.1);
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
	<a href="{href}">{button}</a>
</div>