<template>
	<v-sheet class="pa-8 mt-4">
		<v-container class="text-center">
			<v-btn elevation="2" outlined rounded color="success" class="mr-6" @click="dialog1 = true">
				<span class="text-body-2">Approve</span>
			</v-btn>

			<v-btn elevation="2" outlined rounded color="error" class="mr-6" @click="dialog2 = true">
				<span class="text-body-2">Reject with comment</span>
			</v-btn>

			<v-dialog v-model="dialog1" width="550">
				<v-card class="pt-10 pb-4 px-4">
					<v-card-text class="text-center">
						<div class="text-h6 text-center mb-4">Do you really want to approve the application?</div>
						You are going to approve a company application
					</v-card-text>

					<v-card-actions>
						<div class="mx-auto">
							<v-btn class="mr-3" color="grey" outlined @click="dialog1 = false">Cancel</v-btn>
							<v-btn class="mr-3" color="success" @click="CompanyStatus('Approve')">Approve</v-btn>
						</div>
					</v-card-actions>
				</v-card>
			</v-dialog>

			<v-dialog v-model="dialog2" width="600">
				<v-card class="pa-4">
					<v-card-title>
						<div class="d-flex justify-space-between">
							<div class="text-h6">Do you really want to Reject the Application ?</div>
						</div>
					</v-card-title>

					<v-card-text class="text-center">
						<div class="text-left">
							<h2 class="text-subtitle-1 font-weight-medium design--text">Add comment</h2>
							<h3 class="caption">User will be able to make corrections accordingly</h3>
						</div>
						<v-text-field v-model="comment" :counter="500" label="add your comment"></v-text-field>
					</v-card-text>

					<v-card-actions>
						<div class="mx-auto">
							<v-btn class="mr-3" color="grey" outlined @click="dialog2 = false">Cancel</v-btn>
							<v-btn class="mr-3" color="error" @click="CompanyStatus('Reject')">Reject</v-btn>
						</div>
					</v-card-actions>
				</v-card>
			</v-dialog>
		</v-container>
	</v-sheet>
</template>

<script>
import * as company from '@/utils/api/RequestCompanyAPI'

export default {
	data: () => ({
		dialog1: false,
		dialog2: false,
		comment: '',
	}),
	props: { companyid: { required: true, type: String } },
	methods: {
		async CompanyStatus(status) {
			if (status == 'Approve') {
				try {
					const response = await company.default.update({
						request_company_id: this.companyid,
						status: 'APPROVED',
					})
					this.dialog1 = false
				} catch (err) {
					console.log(err)
				}
			} else if (status == 'Reject') {
				try {
					const response = await company.default.update({
						request_company_id: this.companyid,
						status: 'REJECTED',
					})
					this.dialog2 = false
				} catch (err) {
					console.log(err)
				}
			}
		},
	},
}
</script>

<style></style>
