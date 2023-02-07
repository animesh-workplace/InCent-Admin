<template>
	<v-app>
		<CommonHeader login />
		<Nuxt />
		<CommonFooter />
	</v-app>
</template>

<script>
export default {
	data: () => ({}),
	components: {},
	methods: {},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style></style>
