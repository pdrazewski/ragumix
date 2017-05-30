<template>
	<div class="a-typo" :class="[
			type ? 'is-' + type : '',
			decoration ? 'is-' + decoration : '',
			{'is-inline': inline} ]">
		<slot>Lorem ipsum dolor sit amet</slot>
	</div>
</template>
<script>
	export default {
		name: 'atom-typo',
		props: {
			inline: {
				type: Boolean
			},
			type: {
				type: String,
				default: 'text'
			},
			decoration: {
				type: String
			}
		}
	}
</script>
