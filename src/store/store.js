import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		loader: false,
		editor: {
			style: {},
			key: '',
			name: ''
		}
	},
	mutations: {
		EDITOR_SET_STYLE (state, key, value) {
			state.editor.style[key] = value
		},
		EDITOR_SET_KEY (state, key) {
			state.editor.key = key
		},
		EDITOR_SET_NAME (state, name) {
			state.editor.name = name
		}
	},
	actions: {
		editorSetStyle({commit}, key, value) {
			commit('EDITOR_SET_STYLE', key, value)
		},
		editorSetKey({commit}, key) {
			commit('EDITOR_SET_KEY', key)
		},
		editorSetName({commit}, name) {
			commit('EDITOR_SET_NAME', name)
		}
	},
	getters: {
	    editorStyle: state => {
	      return state.editor.style
	    }
	}
})
