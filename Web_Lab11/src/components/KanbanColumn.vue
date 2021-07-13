<template>
	<draggable
		class="kanban-column"
		:class="{ dark: this.$store.state.darkTheme }"
		item-key="id"
		group="tasks"
		animation="200"
		:list="$store.state[listName]"
		:setData="modifyDragItem"
		@end="this.$store.commit('save')"
	>
		<template #header>
			<h3 class="kanban-column__title">{{ title }} ({{ this.$store.state[listName].length }})</h3>
		</template>

		<template #item="{ element }">
			<Task :info="element" :group="listName" :key="element.id" />
		</template>
	</draggable>
</template>

<script>
import Task from './Task';
import draggable from 'vuedraggable';

export default {
	props: ['listName', 'title'],

	components: { Task, draggable },

	methods: {
		// Display none ghost of task
		modifyDragItem: (e) => e.setDragImage(document.createElement('div'), 0, 0),
	},
};
</script>

<style lang="sass">
.kanban-column
	padding: 25px
	min-height: 200px
	background-color: #ddd

	&.dark
		background: #333
		color: #fff

	&__title
		text-align: center
		margin-bottom: 15px
		font-weight: 700
</style>
