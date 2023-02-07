<template>
	<v-app>
		<CommonSideBar v-model="navbar_visbile" />
		<CommonHeader v-model="navbar_visbile" />
		<v-main class="pt-1 mt-n8">
			<Nuxt />
		</v-main>
		<CommonFooter />
	</v-app>
</template>

<script>
export default {
	data: () => ({
		navbar_visbile: false,
	}),
	components: {},
	methods: {},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style></style>
