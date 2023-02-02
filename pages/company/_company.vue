<template>
	<div>
		<CommonBreadCrumb />
		<ApplicationHeader />
		<ApplicationCompany />
		<ApplicationUsers />
		<v-sheet class="pa-8 mt-4">
			<v-container class="text-center">
				<v-btn elevation="2" outlined rounded color="success" class="mr-6" @click="dialog1 = true">
					<span class="text-body-2">Approve</span>
				</v-btn>

				<v-btn elevation="2" outlined rounded color="error" class="mr-6" @click="dialog2 = true">
					<span class="text-body-2">Reject with comment</span>
				</v-btn>

				<v-dialog v-model="dialog1" width="500">
					<v-card>
						<v-card-title>
							<div class="d-flex justify-space-between">
								<div class="text-h6">Do you really want to approve the application?</div>
							</div>
						</v-card-title>

						<v-card-text class="text-center">
							You are going to approve a company application
						</v-card-text>

						<v-card-actions>
							<div class="mx-auto">
								<v-btn class="mr-3" color="primary" outlined @click="dialog1 = false"
									>Cancel</v-btn
								>
								<v-btn class="mr-3" color="success" @click="dialog1 = false">Approve</v-btn>
							</div>
						</v-card-actions>
					</v-card>
				</v-dialog>

				<v-dialog v-model="dialog2" width="500">
					<v-card>
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
							<v-text-field v-model="comment" :counter="300" label="add your comment"></v-text-field>
						</v-card-text>

						<v-card-actions>
							<div class="mx-auto">
								<v-btn class="mr-3" color="primary" outlined @click="dialog2 = false"
									>Cancel</v-btn
								>
								<v-btn class="mr-3" color="error" @click="dialog2 = false">Reject</v-btn>
							</div>
						</v-card-actions>
					</v-card>
				</v-dialog>
			</v-container>
		</v-sheet>
	</div>
</template>

<script>
export default {
	data: () => ({
		dialog1: false,
		dialog2: false,
		comment: '',
	}),
	components: {},
	methods: {},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style></style>
