<script>
	import Button from './Button.svelte';
</script>

<style>
div {
  z-index: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: -4vh;
  padding: 1vh 1vw;
  background-color: #5a507e;
  color: white;
  text-align: center;
  font-size: 1.2rem;
}
</style>

<div class="navbar">
	<Button href="/">Home</Button>
	<Button href="/events">Events</Button>
</div>