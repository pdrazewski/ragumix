<template>
	<div class="a-alert"
		:class="{ 'a-alert_success' : type == 'success', 'a-alert_error': type == 'error', 'a-alert_info': type == 'info', 'a-alert_warning': type == 'warning' }"
		v-if="show">
		<span class="a-alert_icon" v-html="icon"></span>
		<h3 class="a-alert_header" v-if="header">
			{{ header }}
		</h3>
		<p class="a-alert_content" v-html="msg"></p>
		<span class="a-alert_close" v-if="close" @click="show = false">x</span>
	</div>
</template>
<script>
	export default {
		name: 'atom-alert',
		props: {
			type: {
				required: false,
				type: String
			},
			close: {
				required: false,
				type: Boolean,
				default: true
			},
			msg: {
				required: false,
				type: String
			},
			icon: {
				required: false,
				type: String
			},
			header: {
				required: false,
				type: String
			}
		},
		data () {
			return {
				show: true
			}
		}
	}
</script>