<template>
	<v-app>
		<CommonHeader login />
		<Nuxt />
		<CommonFooter />
	</v-app>
</template>

<script>
import * as login from '@/utils/api/LoginAPI'

export default {
	data: () => ({
		drawer: true,
	}),
	components: {},
	methods: {},
	mounted() {
		this.$nextTick(() => {
			if (login.default.isUserLoggedIn()) {
				this.$router.push('/admin')
			}
		})
	},
}
</script>

<style></style>
