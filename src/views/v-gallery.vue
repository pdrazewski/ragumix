<template>
	<viewBase class="v-gallery">
		<template slot>
			<div class="c-sort">
				<p class="a-typo a-secondary">Sort by</p>
				<button class="a-btn is-primary" @click="sortBy('name', null, 'string')">Name</button>
				<button class="a-btn is-primary" @click="sortBy('width','style','number')">Width</button>
				<button class="a-btn is-primary" @click="sortBy('height', 'style', 'number')">Height</button>
				<button class="a-btn is-primary" @click="sortBy('border-radius','style','number')">Border radius</button>
				<button class="a-btn is-primary" @click="sortBy('createdAt')">Creation date</button>
			</div>
			<transition-group name="flip-list" tag="div" class="c-gallery">
			<div v-bind:key="item" v-for="(item, index) in items" class="c-gallery_item">
				{{item.name}}
				<div :style="item.computedStyle"></div>
				<a href="#" class="m-team_remove" @click.prevent="removeTeam(item.key)">Remove</a>
			</div>
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
				items: [],
				sort: {
					name: {
						asc: true
					},
					width: {
						asc: true
					},
					height: {
						asc: true
					},
					"border-radius": {
						asc: true
					},
					createdAt: {
						asc: true
					}
				}
			}
		},
		mounted(){
			firebaseConnect.helpers.fetchDB('items', this);
		},
		methods: {
			/**
			 * @param  {[type]}
			 * @return {[type]}
			 */
			removeTeam(key) {
				firebaseConnect.helpers.removeKey('items', key)
				firebaseConnect.helpers.fetchDB('items', this)
			},
			/**
			 * @param  {[type]}
			 * @param  {[type]}
			 * @param  {[type]}
			 * @return {[type]}
			 */
			sortBy(key, property, type) {
				var sortedItems = _.sortBy(this.items, [function(o) { 
					if (type == 'number') {
						return parseInt(o[property][key])
					} else {
						if (type == 'string') {
							return o[key].toLowerCase();
						} else {
							return o[key]
						}
					}
				}])
				if (this.sort[key].asc) {
					this.items = sortedItems.reverse()
				} else {
					this.items = sortedItems
				}
				this.sort[key].asc = !this.sort[key].asc
			}
		}
	}
</script>
