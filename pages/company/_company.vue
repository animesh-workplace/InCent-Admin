<template>
	<div>
		<CommonBreadCrumb />
		<ApplicationHeader />
		<ApplicationCompany />
		<ApplicationUsers />
		<ApplicationApproval />
	</div>
</template>

<script>
export default {
	data: () => ({}),
	layout: 'admin',
	components: {},
	methods: {},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style></style>
