<template>
	<v-sheet class="py-8 px-8 px-sm-16">
		<h1 class="font-weight-medium design--text">ABC Company</h1>
		<v-breadcrumbs
			:items="[
				{ text: 'Applications', disabled: false },
				{ text: `Application No. ${application}`, disabled: false },
			]"
			divider=">"
			class="px-0 pt-0"
		></v-breadcrumbs>
	</v-sheet>
</template>

<script>
export default {
	data: () => ({}),
	props: { application: { type: Number, required: true } },
	components: {},
	methods: {},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style></style>
