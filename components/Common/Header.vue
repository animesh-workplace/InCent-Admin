<template>
	<v-app-bar clipped-left fixed app color="white" :height="login ? 90 : undefined">
		<!-- <v-app-bar-nav-icon v-if="!login" /> -->
		<img src="@/assets/logo.png" alt="Logo" :height="login ? '80px' : '60px'" />
		<v-spacer v-if="!login" />
		<v-avatar color="design" size="36" v-if="!login">
			<img src="@/assets/avatar.png" alt="Avatar" />
		</v-avatar>
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
