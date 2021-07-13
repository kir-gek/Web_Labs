import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

export default createStore({
	state: {
		darkTheme: false,
		
		plan: [],
		work: [],
		ready: [],

		showModalAdd: false,
		showModalEdit: false,

		editItem: {
			id: null,
			title: '',
			desc: '',
			date: '',
			priority: '',
		}
	},

	getters: {
		countTodos(state) {
			return state.plan.length + state.work.length + state.ready.length
		}
	},

	mutations: {
		updateDesc(state, message) {
			state.editItem.desc = message
		},

		updatePriority(state, message) {
			state.editItem.priority = message
		},


		transfer(state, payload) {
			state[payload.group].findIndex((el, index, arr) => {
				if (el && el.id === payload.item.id) {
					arr.splice(index, 1);
					state[payload.to].push(el);
				}	
			})
		},


		addItem(state, payload) {
			state[payload.group].push(payload.item);
			state.showModalAdd = false;
		},

		deleteItem(state, payload) {
			state[payload.group].findIndex((el, index, arr) => {
				if (el && el.id === payload.id) {
					arr.splice(index, 1);
				}	
			})
		},

		editItem(state, payload) {
			state[payload.group].findIndex((el, index, arr) => {
				if (el && el.id === state.editItem.id) {
					arr[index].group = payload.group
					arr[index].desc= payload.item.desc
					arr[index].priority = payload.item.priority
				}	
			})
		},

		openModalAdd(state) {
			state.showModalAdd = true;
		},

		openModalEdit(state, payload) {
			state.editItem = {
				id: payload.item.id,
				title: payload.item.title,
				desc: payload.item.desc,
				priority: payload.item.priority,
				group: payload.group,
			}

			state.showModalEdit = true;
		},

		closeModalAdd(state) {
			state.showModalAdd = false;
		},

		closeModalEdit(state) {
			state.editItem = {
				id: null,
				title: '',
				desc: '',
				date: '',
				priority: '',
			} 

			state.showModalEdit = false;
		},

		save() {}
	},

	actions: {},
	modules: {},

	plugins: [createPersistedState({
		key: 'keyname',
		storage: window.localStorage
	})],
});
