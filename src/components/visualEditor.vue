<template>
	<div>
		<div class="a-alert" v-if="saved">
			{{saved}}
		</div>
		<div class="b-mainWrapper_primary">
			<p class="a-typo is-primary">Customize rect</p>
			<form class="a-form" @submit.prevent="save">
				<div class="a-form_row">
					<label class="a-form_label">Name:</label>
					<input class="a-form_field" v-model="name" type="text">
				</div>
				<div class="a-form_row">
					<label class="a-form_label">Background color:</label>
					<input class="a-form_field" id="bg-color" v-model="bgcolor" type="text">
				</div>
				<div class="a-form_row">
					<label class="a-form_label">Width (px):</label>
					<input class="a-form_field" id="bg-color" v-model="width" type="text">
				</div>
				<div class="a-form_row">
					<label class="a-form_label">Height (px):</label>
					<input class="a-form_field" id="bg-color" v-model="height" type="text">
				</div>
				<div class="a-form_row">
					<label class="a-form_label">Border-radius ({{radius}}px):</label>
					<range-slider
					    class="slider"
					    min="0"
					    :max="width/2"
					    step="1"
					    v-model="radius">
					</range-slider>
					<span class="a-form_from">0</span>
					<span class="a-form_to">{{width/2}}px </span>
				</div>
				<div class="a-form_row a-form_btn">
					<button type="submit" class="a-btn is-primary">Save</button>
				</div>
			</form>
		</div>
		<div class="b-mainWrapper_secondary" id="output">
			<div :style="rectStyle"></div>
		</div>
	</div>
</template>


<script>
	import RangeSlider from 'vue-range-slider'
	import firebaseConnect from '../firebase.js'
	const colorPicker = require('color-picker')	
	export default {
		name: 'component-visual-editor',
		components: {
			RangeSlider
		},
		data() {
			return {
				name: "My amazing rectangle",
				bgcolor: '#ccc',
				width: 300,
				height: 300,
				radius: 0,
				newKey: "",
				saved: false
			}
		},
		computed: {
			rectStyle: function () {
				return {
					width: this.width + "px",
					height: this.height + "px",
					background: this.bgcolor,
					"border-radius": this.radius + "px"
				}
			}
		},
		mounted(){
			this.colorPickerInit();
			this.newKey = firebaseConnect.helpers.generateKey()
		},
		methods: {
			colorPickerInit() {
				var picker = new CP(document.getElementById('bg-color'));
				picker.on("drag", function(color) {
  					this.bgcolor = '#' + color;
				}.bind(this));
			},
			save() {
				var relativeWidth = this.width/document.getElementById('output').offsetWidth*100;
				var relativeHeight =  this.height/document.getElementById('output').offsetHeight*100;
				var data = {
					key: this.newKey,
					data: {
						key: this.newKey,
						name: this.name,
						style: this.rectStyle,
						computedStyle: {
							width: relativeWidth > 100 ? 100 + "%" : relativeWidth + "%",
							height:  relativeHeight > 100 ? 100 + "%" : relativeHeight + "%",
							background: this.bgcolor,
							"border-radius": this.radius + "px"
						},
						createdAt: firebaseConnect.helpers.created()
					}
				}
				firebaseConnect.helpers.push(data, "saved", this)
			}
		}
	}
</script>