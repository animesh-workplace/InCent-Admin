<template>
	<div>
		<CommonBreadCrumb />
		<ApplicationHeader />
		<!-- 		<ApplicationCompany />
		<ApplicationUsers />
		<v-sheet class="pa-8 mt-4">
			<v-container class="text-center">
				<v-btn elevation="2" outlined rounded color="success" class="mr-6">
					<span class="text-body-2">Approve</span>
				</v-btn>
				<v-btn elevation="2" outlined rounded color="error" class="mr-6">
					<span class="text-body-2">Reject with comment</span>
				</v-btn>
			</v-container>
		</v-sheet> -->
	</div>
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
