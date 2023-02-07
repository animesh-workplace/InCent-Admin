<template>
	<v-app>
		<CommonHeader login />
		<Nuxt />
		<CommonFooter />
	</v-app>
	<!-- 	<v-app>
		<v-navigation-drawer v-model="drawer" app>
		</v-navigation-drawer>
		<v-toolbar fixed class="transparent">
			<v-btn icon @click.stop="drawer = !drawer">
				<v-icon>
					{{ drawer ? 'mdi-chevron-right' : 'mdi-chevron-left' }}
				</v-icon>
			</v-btn>
		</v-toolbar>
	</v-app> -->
</template>

<script>
export default {
	data: () => ({
		drawer: true,
	}),
	components: {},
	methods: {},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style></style>
