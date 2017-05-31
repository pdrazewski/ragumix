<template>
	<viewBase class="v-gallery">
		<template slot>
			<button @click="filterByNameAsc">sortuje A-Z</button>
			<button @click="filterByNameDesc">sortuje Z-A</button>
			<transition-group name="flip-list" tag="ul">
			<li v-bind:key="item" v-for="(item, index) in items" style="float: left; padding: 40px;border: 1px solid #eee">
				<div :style="item.style">
					{{item.name}}
				</div>
				<a href="#" class="m-team_remove" @click.prevent="removeTeam(item.key)">Remove</a>
			</li>
			</transition-group>
		</template>
	</viewBase>
</template>

<script>
	import viewBase from './v-base.vue'
	import firebaseConnect from '../firebase.js'
	import _ from 'lodash'
	export default {
		name: 'view-rects-gallery',
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
			filterByNameAsc() {
				this.items = _.sortBy(this.items, [function(o) { return o.name; }]);
			},
			filterByNameDesc() {
				this.items = _.sortBy(this.items, [function(o) { return o.name; }]).reverse();
			}
		}
	}
</script>
