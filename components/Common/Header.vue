<template>
	<v-app-bar clipped-left fixed app color="white">
		<v-app-bar-nav-icon v-if="!login" />
		<img src="@/assets/logo.png" alt="Logo" height="60px" />
		<v-spacer v-if="!login" />
		<v-avatar color="design" size="36" v-if="!login"> </v-avatar>
	</v-app-bar>
</template>

<script>
export default {
	data: () => ({}),
	props: { login: { default: false, type: Boolean } },
	components: {},
	methods: {},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style></style>
