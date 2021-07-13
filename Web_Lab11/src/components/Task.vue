<template>
	<div class="kanban-task" :class="{ dark: this.$store.state.darkTheme }">
		<header class="kanban-task__header">
			<h4 class="kanban-task__title">Задача#{{ info.id }}</h4>
			<div class="kanban-task__priority" :class="'kanban-task__priority--' + info.priority">{{ info.priority }}</div>
		</header>

		<main class="kanban-task__main">
			<div class="kanban-task__desc">{{ info.desc }}</div>
			<div class="kanban-task__date">{{ info.date }}</div>
		</main>

		<footer class="kanban-task__footer">
			<button class="kanban-task__edit">
				<span @click="handleClickLeft" v-if="group !== 'plan'">Left</span>
			</button>

			<button class="kanban-task__edit">
				<span @click="handleClickRight" v-if="group !== 'ready'">Right</span>
			</button>

			<button class="kanban-task__edit">
				<img v-if="this.$store.state.darkTheme" src="@/assets/icons/gearDarkTheme.svg" @click="handleClickEdit" class="kanban-task__icon" alt="Gear">
				<img v-else src="@/assets/icons/gear.svg" @click="handleClickEdit" class="kanban-task__icon" alt="Gear">
			</button>

			<button class="kanban-task__edit">
				<img @click="handleClickDelete" v-if="this.$store.state.darkTheme" src="@/assets/icons/deleteDarkTheme.svg" class="kanban-task__icon" alt="Delete">
				<img @click="handleClickDelete" v-else src="@/assets/icons/delete.svg" class="kanban-task__icon" alt="Delete">
			</button>
		</footer>
	</div>
</template>

<script>
export default {
	props: [ 'info', 'group' ],

	methods: {
		handleClickDelete() {
			this.$store.commit('deleteItem', { id: this.info.id, group: this.group })
		},

		handleClickEdit() {
			this.$store.commit('openModalEdit', { item: this.info, group: this.group })
		},

		handleClickRight() {
			if (this.group == 'plan')
				this.$store.commit('transfer', { item: this.info, group: this.group, to: 'work'})
			else if (this.group == 'work')
				this.$store.commit('transfer', { item: this.info, group: this.group, to: 'ready'})
		},

		handleClickLeft() {
			if (this.group == 'ready')
				this.$store.commit('transfer', { item: this.info, group: this.group, to: 'work'})
			else if (this.group == 'work')
				this.$store.commit('transfer', { item: this.info, group: this.group, to: 'plan'})
		}
	}
}
</script>

<style lang="sass">
	.kanban-task
		background-color: #eee
		padding: 15px 20px
		display: flex
		flex-direction: column
		justify-content: stretch
		cursor: grab

		&.dark
			background: #111

		&:not(:last-child)
			margin-bottom: 30px

		&__header
			display: flex
			justify-content: space-between
			align-items: center
			margin-bottom: 20px
		
		&__main
			margin-bottom: 20px

		&__footer
			display: flex
			justify-content: flex-end

		&__control
			display: flex
			justify-content: space-between

		&__title
			font-size: 1.3em
			font-weight: 600

		&__priority
			width: 25px
			height: 25px
			border-radius: 50%
			
			color: #fff
			display: flex
			justify-content: center
			align-items: center
			
			&--3
				background-color: #4bb543
			
			&--2
				background-color: #fcd12a 
			
			&--1
				background-color: #ff313a 

		&__desc
			margin-bottom: 10px

		&__date
			font-size: .9em

		&__edit
			border: none
			text-align: center
			cursor: pointer
			padding: 7px
		
		button
			background: transparent
			color: #000

		&.dark button
			color: #fff

		&__icon
			width: 20px
</style>