<template>
	<viewBase class="v-index">
		<template slot>
			<div class="a-alert" v-if="saved">
				{{saved}}
			</div>
			<div class="b-mainWrapper_primary">
				<p class="a-typo is-primary">Customize rect</p>
				<editForm></editForm>
			</div>
			<div class="b-mainWrapper_secondary">
				
			</div>
		</template>
	</viewBase>
</template>

<script>
	import RangeSlider from 'vue-range-slider'
	import firebaseConnect from '../firebase.js'
	import viewBase from './v-base.vue'
	import editForm from '../components/editForm.vue'
	const colorPicker = require('color-picker')	
	export default {
		name: 'view-index',
		components: {
			viewBase,
			RangeSlider,
			editForm
		},
		data() {
			return {
				saved: false
			}
		}
	}
</script>
