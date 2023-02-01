<template>
	<v-sheet class="py-8 px-16">
		<h1 class="font-weight-medium design--text">ABC Company</h1>
		<v-breadcrumbs :items="items" divider=">" class="px-0 pt-0"></v-breadcrumbs>
	</v-sheet>
</template>

<script>
export default {
	data: () => ({
		items: [
			{ text: 'Applications', disabled: false },
			{ text: 'Application No. 111111', disabled: false },
		],
	}),
	components: {},
	methods: {},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style></style>
