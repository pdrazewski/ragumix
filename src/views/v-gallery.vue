<template>
	<viewBase class="v-gallery">
		<template slot>
			<div v-for="(item, index) in items" style="float: left; padding: 40px;">
				<div :style="item.style">
					{{item.name}}
				</div>
				<a href="#" class="m-team_remove" @click.prevent="removeTeam(item.key)">Remove</a>
			</div>
		</template>
	</viewBase>
</template>

<script>
	import viewBase from './v-base.vue'
	import firebaseConnect from '../firebase.js'
	export default {
		name: 'view-code-add',
		components: {
			viewBase
		},
		data() {
			return {
				items: []
			}
		},
		mounted(){
			firebaseConnect.helpers.fetchDB('items', this)
		},
		methods: {
			removeTeam(key) {
				firebaseConnect.helpers.removeKey('items', key)
				firebaseConnect.helpers.fetchDB('items', this)
			},
		}
	}
</script>
