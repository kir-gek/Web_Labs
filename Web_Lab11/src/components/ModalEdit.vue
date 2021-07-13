<template>
	<div class="modal" :class="{ dark: this.$store.state.darkTheme }">
		<button class="modal__close" @click="this.$store.commit('closeModalEdit')">
			<div></div>
			<div></div>
		</button>

		<form class="modal__form" @submit.prevent>
			<label class="modal__label">
				<h6 class="modal__input-title">Desc</h6>
				<input type="text" class="modal__input" v-model.trim="desc">
			</label>

			<label class="modal__label">
				<h6 class="modal__input-title">Priority</h6>
				<select class="modal__input" v-model="priority">
					<option value="3">Низкое</option>
					<option value="2">Среднее</option>
					<option value="1">Высокое</option>
				</select>
			</label>

			<button type="submit" class="modal__submit" @click="editItem">Edit</button>
		</form>
	</div>
</template>

<script>
export default {
	props: [ 'item' ],

	computed: {
		desc: {
			get () {
				return this.$store.state.editItem.desc
			},
			set (value) {
				this.$store.commit('updateDesc', value)
			}
		},

		priority: {
			get () {
				return this.$store.state.editItem.priority
			},
			set (value) {
				this.$store.commit('updatePriority', value)
			}
		},
	},

	methods: {
		editItem() {
			if (this.desc.length <= 0) return;

			this.$store.commit('editItem', {
				item: {
					id: this.$store.state.editItem.id,
					desc: this.desc,
					priority: this.priority
				},

				group: this.$store.state.editItem.group
			})

			this.title = ''
			this.desc = ''
			this.priority = '3'

			this.$store.commit('closeModalEdit');
		}
	}
}
</script>

<style lang="sass">
	.modal
		position: fixed
		left: 0
		top: 0
		width: 100vw
		height: 100vh
		background: rgba(0, 0, 0, 0.5)
		display: flex
		justify-content: center
		align-items: center

		&__close
			position: fixed
			right: 30px
			top: 30px
			background: transparent
			width: 50px
			height: 50px
			border: none
			display: flex
			justify-content: center
			align-items: center
			cursor: pointer

			div
				position: absolute
				width: 70%
				height: 3px
				background: #fff
				border-radius: 15px

				&:nth-child(1)
					transform: rotate(45deg)

				&:nth-child(2)
					transform: rotate(-45deg)

		&__form
			background: #fff
			display: flex
			flex-direction: column
			padding: 40px 150px

		&.dark &__form
			background: #222
			color: #fff

		&__label
			margin-bottom: 30px

		&__input-title
			font-size: 1.2em
			margin-bottom: 5px
			font-weight: normal

		&__input
			border: none
			border-bottom: 1px solid #222
			outline: none
			padding: 5px 0px
			font-size: 1.25em
			width: 100%
			
		&__submit
			background: #222
			color: #fff
			border: 0
			font-size: 1.25em
			padding: 5px 0
			font-weight: normal
			color: #fff
			cursor: pointer

		&.dark &__submit
			background: #fff
			color: #222
</style>