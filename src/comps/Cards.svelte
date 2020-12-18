<script>
	export let cards = [];
</script>

<style>
.cards {
	display: flex;
	flex-direction: row;
	padding: 6vw 10vw;
	justify-content: space-around;
	font-size: 1.2rem;
}

.card {
	display: flex;
	flex-direction: column;
	justify-content: cneter;
	align-items: center;
	background-color: #FAFAFA;
	color: #212121;
	flex: 1;
	border-radius: 10px;
	padding: 1rem;
	margin: 0 2vw;
}

h1 {
	margin-bottom: 1rem;
}
</style>

<div class="cards">
	{#each cards as card}
	<div class="card">
		<a href={card.href}><h1>{card.title}</h1></a>
		<p>{card.description}</p>
	</div>
	{/each}
</div>