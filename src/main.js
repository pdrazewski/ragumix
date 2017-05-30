import Vue from 'vue'
import VueRouter from 'vue-router'

// routing
import index from './views/v-index.vue'
import gallery from './views/v-gallery.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		{ path: '/', component: index },
		{ path: '/gallery', component: gallery }
	]
})

new Vue({
	router
}).$mount('#app')
