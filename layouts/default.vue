<template>
	<v-app>
		<CommonSideBar />
		<CommonHeader />
		<v-main>
			<Nuxt />
		</v-main>
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
