<template>
	<div>
		<CommonBreadCrumb :application="company_details.application_no" />
		<ApplicationHeader :info="company_details" />
		<ApplicationCompany :info="company_details" />
		<ApplicationUsers :users="company_user_details" />
		<ApplicationApproval />
	</div>
</template>

<script>
import * as company from '@/utils/api/RequestCompanyAPI'

export default {
	data: () => ({
		company_details: {},
		company_user_details: {},
	}),
	layout: 'admin',
	components: {},
	methods: {},
	beforeMount() {
		this.company_details = company.default.getRequestedCompany()
		this.company_user_details = company.default.getRequestedCompanyUsers()
	},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style></style>
