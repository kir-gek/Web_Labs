<template>
	<header class="header" :class="{ dark: this.$store.state.darkTheme }">
		<a class="header__logo" href="/">Kir-Gek</a>

		<div class="header__inner">
			<Toggle v-model="this.$store.state.darkTheme" @change="this.$store.commit('save')" class="theme-switcher" />
		</div>
	</header>
</template>

<script>
import Toggle from '@vueform/toggle'

export default {
	name: 'Header',

	components: { Toggle }
}
</script>

<style src="@vueform/toggle/themes/default.css"></style>
<style lang="sass">
	.header
		min-height: 80px
		padding: 0 50px

		display: flex
		align-items: center
		justify-content: space-between

		background-color: #fff
		color: #222
	

		&.dark
			background-color: #111
			color: #fff


		&__logo
			font-size: 1.4em
	
	.theme-switcher
		--toggle-bg-on: #bbb
		--toggle-bg-off: #222
		--toggle-border-on: transparent
		--toggle-border-off: transparent

		.toggle-handle:before
</style>