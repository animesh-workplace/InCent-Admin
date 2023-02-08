<template>
	<v-container class="mt-8">
		<v-sheet class="py-4 px-6 rounded-lg thick-outline">
			<div class="d-flex align-center mt-n8 ml-8">
				<div class="white">
					<v-icon class="design--text mr-1 mb-1">mdi-office-building</v-icon>
					<span class="design--text font-weight-medium text-h6 white">Company Details</span>
				</div>
			</div>

			<div class="mt-8">
				<div class="d-flex flex-row flex-sm-wrap">
					<div class="mr-8">
						<div class="d-flex flex-row">
							<div class="mr-5">
								<div v-for="(item, index) in items" :key="index">
									<h3 class="text-right company-title mb-6">{{ item.title }}</h3>
								</div>
							</div>
							<div class="mr-5">
								<div v-for="(item, index) in items" :key="index">
									<h3 class="text-left company-subtitle mb-6">{{ info[item.subtitle] }}</h3>
								</div>
							</div>
						</div>
					</div>

					<div class="align-self-center ml-5">
						<table>
							<tr v-for="(item, index) in other_items" :key="index">
								<td>
									<h3 class="company-title">{{ item.title }}</h3>
								</td>
								<td>
									<h3 class="company-subtitle mr-3">
										{{ info[item.subtitle] }}
									</h3>
								</td>
								<td>
									<a
										target="_blank"
										:href="info[item.link]"
										class="d-flex flex-column justify-center"
									>
										<img
											width="20"
											alt="Sucess"
											class="mx-auto mb-2"
											src="@/assets/pdf_icon.png"
										/>
										<span class="company-link">{{ item.file_name }}</span>
									</a>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</v-sheet>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		items: [
			{ title: 'Registered Company Name', subtitle: 'company_name' },
			{ title: 'Your Name', subtitle: 'your_name' },
			{ title: 'Website URL', subtitle: 'website_url' },
			{ title: 'Your Email ID', subtitle: 'your_email_id' },
			{ title: 'Your Mobile number', subtitle: 'your_mobile_no' },
			{ title: 'Billing Address', subtitle: 'billing_address' },
		],
		other_items: [
			{ title: 'TAN No.', subtitle: 'tan_no', link: 'tan_document', file_name: 'Company-tan.pdf' },
			{ title: 'PAN No.', subtitle: 'pan_no', link: 'pan_document', file_name: 'Company-pan.pdf' },
			{ title: 'CIN No.', subtitle: 'cin_no', link: 'cin_document', file_name: 'Company-cin.pdf' },
			{ title: 'GST No.', subtitle: 'gst_no', link: 'gst_document', file_name: 'Company-gst.pdf' },
		],
	}),
	props: { info: { type: Object, required: true } },
	methods: {
		// GotoLink(link) {
		// 	this.$router.push()
		// }
	},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style scoped>
.thick-outline {
	border: solid 1.5px;
}
.company-title {
	color: #2c2a2a;
	font-size: 16px;
	font-weight: 400;
	line-height: 19px;
	font-style: normal;
}
.company-subtitle {
	color: #404040;
	font-size: 16px;
	font-weight: 400;
	line-height: 19px;
	font-style: normal;
}
.company-link {
	font-style: normal;
	font-weight: 400;
	font-size: 6px;
	line-height: 7px;
	text-decoration-line: underline;
	color: #767676;
}
td {
	padding: 8px;
}
</style>
