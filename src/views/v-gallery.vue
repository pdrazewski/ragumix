<template>
	<viewBase class="v-gallery">
		<template slot>
			<button @click="filterByNameAsc">sortuje A-Z</button>
			<button @click="filterByNameDesc">sortuje Z-A</button>
			<button @click="filterByWidth">sortuje width</button>
			<button @click="filterByWidthDesc">sortuje width 2</button>
			<button @click="filterByHeight">sortuje Height</button>
			<button @click="filterByHeightDesc">sortuje Height 2</button>
			<button @click="filterByRadius">sortuje radius</button>
			<button @click="filterByRadiusDesc">sortuje radius 2</button>
			<button @click="filterByDate">sortuje najstarsze </button>
			<button @click="filterByDateDesc">sortuje najnowsze</button>
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
				items: []
			}
		},
		mounted(){
			firebaseConnect.helpers.fetchDB('items', this);
		},
		methods: {
			removeTeam(key) {
				firebaseConnect.helpers.removeKey('items', key)
				firebaseConnect.helpers.fetchDB('items', this)
			},
			filterByNameAsc() {
				this.items = _.sortBy(this.items, [function(o) { return o.name.toLowerCase(); }]);
			},
			filterByNameDesc() {
				this.items = _.sortBy(this.items, [function(o) { return o.name.toLowerCase(); }]).reverse();
			},
			filterByWidth() {
				this.items = _.sortBy(this.items, [function(o) { return parseInt(o.style.width); }]);
			},
			filterByWidthDesc() {
				this.items = _.sortBy(this.items, [function(o) { return parseInt(o.style.width); }]).reverse();
			},
			filterByHeight() {
				this.items = _.sortBy(this.items, [function(o) { return parseInt(o.style.height); }]);
			},
			filterByHeightDesc() {
				this.items = _.sortBy(this.items, [function(o) { return parseInt(o.style.height); }]).reverse();
			},
			filterByRadius() {
				this.items = _.sortBy(this.items, [function(o) { return parseInt(o.style["border-radius"]); }]);
			},
			filterByRadiusDesc() {
				this.items = _.sortBy(this.items, [function(o) { return parseInt(o.style["border-radius"]); }]).reverse();
			},
			filterByDate() {
				this.items = _.sortBy(this.items, [function(o) { return o.createdAt; }]);
			},
			filterByDateDesc() {
				this.items = _.sortBy(this.items, [function(o) { return o.createdAt; }]).reverse();
			}
		}
	}
</script>
