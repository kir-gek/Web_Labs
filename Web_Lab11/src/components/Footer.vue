<template>
	<footer class="footer" :class="{ dark: this.$store.state.darkTheme }">
		<div class="footer__info">Гекман Кирилл. 201-322</div>
	</footer>
</template>

<script>
export default {
	
}
</script>

<style lang="sass">
	.footer
		padding: 0 50px
		display: flex
		align-items: center

		&.dark
			background: #111
			color: #fff
</style>