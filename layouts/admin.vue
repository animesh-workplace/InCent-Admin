<template>
	<v-app>
		<CommonSideBar />
		<CommonHeader />
		<v-main class="pt-1 mt-n8">
			<Nuxt />
		</v-main>
		<CommonFooter />
	</v-app>
</template>

<script>
import * as login from '@/utils/api/LoginAPI'

export default {
	data: () => ({}),
	components: {},
	methods: {},
	mounted() {
		this.$nextTick(() => {
			if (!login.default.isUserLoggedIn()) {
				this.$router.push('/')
			}
		})
	},
}
</script>

<style></style>
