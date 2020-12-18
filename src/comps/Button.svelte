<script>
	export let href = '';
</script>

<style>
a {
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
</style>

<a href="{href}">
	<slot></slot>
</a>