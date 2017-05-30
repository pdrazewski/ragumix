<template>
	<div class="b-mainWrapper">
		<block-header></block-header>
		<div class="b-mainWrapper_content is-content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import blockHeader from '../blocks/b-header.vue'
	export default {
		name: 'view-base',
		components: {
			blockHeader
		}
	}
</script>
