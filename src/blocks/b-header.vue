<template>
	<header class="b-header">
		<div class="b-header_primary is-content">
			<div class="c-logo">
				<h1><router-link to="/">Pimp my <span>rect</span></router-link></h1>
			</div>
			<ul class="c-menu">
				<li class="c-menu_item" v-for="(item, index) in menu">
					 <router-link  :to="'/' + item.path">
					 	<span>{{item.name}}</span>
					 </router-link>
				</li>
			</ul>
		</div>
	</header>
</template>

<script>
	/* eslint-disable no-unused-vars, camelcase, func-call-spacing, no-unexpected-multiline */
	/* eslint quotes: [0, { "avoidEscape": true }] */
	export default {
		name: 'header',
		data() {
			return {
				token: '',
				user: false,
				menu: [{
					path: '',
					name: 'Add new rect'
				}, {
					path: 'gallery',
					name: 'Gallery'
				}]
			}
		}
	}
</script>

