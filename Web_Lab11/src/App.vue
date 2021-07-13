<template>
	<Header />

	<Kanban />

	<Footer />
</template>

<script>
import Header from './components/Header.vue'
import Kanban from './components/Kanban.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header, Kanban, Footer
  }
}
</script>

<style lang="sass">
	*
		margin: 0
		padding: 0
		box-sizing: border-box
		font-family: 'Montserrat'

	body
		

	a
		color: inherit
		text-decoration: none

	#app
		min-height: 100vh
		display: grid
		grid-template-rows: 80px 1fr 50px

	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap')
</style>
