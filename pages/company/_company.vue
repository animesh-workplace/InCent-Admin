<template>
	<div>
		<CommonBreadCrumb :application="company_details.application_no" />
		<ApplicationHeader :info="company_details" />
		<ApplicationCompany :info="company_details" />
		<ApplicationUsers />
		<ApplicationApproval />
	</div>
</template>

<script>
import * as company from '@/utils/api/RequestCompanyAPI'

export default {
	data: () => ({
		company_details: {},
	}),
	layout: 'admin',
	components: {},
	methods: {},
	beforeMount() {
		this.company_details = company.default.getRequestedCompany()
	},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style></style>
