<template>
	<main class="main" :class="{ dark: this.$store.state.darkTheme }">
		<div class="kanban">
			<ModalAdd v-show="showModalAdd" />
			<ModalEdit v-show="showModalEdit" />

			<button class="kanban__new-todo-btn" @click="openModalAdd">+</button>

			<div class="kanban__columns">
				<KanbanColumn listName="plan" title="Plan" />
				<KanbanColumn listName="work" title="Work" />
				<KanbanColumn listName="ready" title="Ready" />
			</div>
		</div>
	</main>
</template>

<script>
import ModalAdd from './ModalAdd';
import ModalEdit from './ModalEdit';
import KanbanColumn from './KanbanColumn';

export default {
	name: 'Kanban',
	components: { ModalAdd, ModalEdit, KanbanColumn },

	computed: {
		showModalAdd() {
			return this.$store.state.showModalAdd
		},

		showModalEdit() {
			return this.$store.state.showModalEdit
		}
	},

	methods: {
		openModalAdd() {
			this.$store.commit('openModalAdd');
		}
	}
};
</script>

<style lang="sass">
.main
	display: flex
	justify-content: center
	padding: 30px

	&.dark
		background: #222

.kanban
	display: flex
	align-items: center
	flex-direction: column
	width: 100%

	&__new-todo-btn
		padding: 0 40px
		font-size: 31px
		border-radius: 15px
		margin-bottom: 20px
		cursor: pointer
		border: none

		background-color: green
		color: #fff

		display: flex
		justify-content: center
		align-items: center

.kanban__columns
	display: grid
	grid-template-columns: 1fr 1fr 1fr
	column-gap: 50px
	width: 90%
	height: 100%
</style>
