<template>
	<a href="#" class="a-btn"
		:class="{
			'is-primary' : type == 'primary',
			'is-secondary': type == 'secondary',
			'is-link': type == 'link',
			'is-tertiary': type == 'tertiary',
			'is-big': size == 'big',
			'is-small': size == 'small'
		}"
		>
			<span class="a-btn_icon"
			v-if="icon && icon.position == 'left'"
			v-html="icon.html"></span>
			{{ text }}
			<span class="a-btn_icon"
			v-if="icon && icon.position == 'right'"
			v-html="icon.html"></span>
	</a>
</template>
<script>
	export default {
		name: 'atom-btn',
		props: {
			type: {
				type: String
			},
			text: {
				type: String
			},
			size: {
				type: String,
				default: ''
			},
			icon: {
				type: Object
			}
		}
	}
</script>