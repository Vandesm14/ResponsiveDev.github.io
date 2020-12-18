<script>
	export let href = '', icon = '', blank = false;
</script>

<style>
a {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
  margin: 10px;
  padding: 6px 12px;
  width: max-content;
  border-radius: 1000px;
  background-color: white;
  color: #5a507e;
  text-decoration: none;
  transition: 150ms ease-out;
}
a:hover {
  box-shadow: 0 4px 20px #00000044;
  transform: scale(1.1);
}
a:empty {
  display: none;
}

img {
	display: block;
  height: calc(1.2rem + 18px);
  border-radius: 1000px;
  text-decoration: none;
	transition: 150ms ease-out;
	margin-right: 6px;
}
</style>

{#if href}
<a href={href} target={blank ? '_blank' : ''}>
	{#if icon}
	<img src={icon} alt="icon">
	<span><slot></slot></span>
	{:else}
	<slot></slot>
	{/if}
</a>
{/if}