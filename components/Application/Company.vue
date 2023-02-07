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
									<h3 class="text-left company-subtitle mb-6">{{ item.subtitle }}</h3>
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
										{{ item.subtitle }}
									</h3>
								</td>
								<td>
									<div class="d-flex flex-column justify-center">
										<img
											width="20"
											alt="Sucess"
											class="mx-auto mb-2"
											src="@/assets/pdf_icon.png"
										/>
										<span class="company-link"> Company-tan.pdf</span>
									</div>
								</td>
							</tr>
						</table>

						<!-- 						<div class="d-flex flex-row">
							<div class="mr-5">
								<div v-for="(item, index) in other_items" :key="index" class="mb-9">
									<h3 class="d-inline text-right company-title">{{ item.title }}</h3>
								</div>
							</div>
							<div>
								<div v-for="(item, index) in other_items" :key="index" class="mb-6">
									<div class="d-flex">
										<h3 class="d-inline text-left company-subtitle mr-3">
											{{ item.subtitle }}
										</h3>
										<div class="d-flex flex-column justify-center">
											<img
												width="20"
												alt="Sucess"
												class="mx-auto mb-2"
												src="@/assets/pdf_icon.png"
											/>
											<span class="company-link"> Company-tan.pdf</span>
										</div>
									</div>
								</div>
							</div>
						</div> -->
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
			{ title: 'Registered Company Name', subtitle: 'Procter & Gamble Pvt. Ltd.' },
			{ title: 'Your Name', subtitle: 'Vedant Parte' },
			{ title: 'Website URL', subtitle: 'www.proctergamble.com' },
			{ title: 'Your Email ID', subtitle: 'proctergamble@email.com' },
			{ title: 'Your Mobile number', subtitle: '7854126365' },
			{ title: 'Billing Address', subtitle: 'block no. 21, sapatarshi building, vashi(w)' },
		],
		other_items: [
			{ title: 'TAN No.', subtitle: '5425623500125' },
			{ title: 'PAN No.', subtitle: '800210254552355' },
			{ title: 'CIN No.', subtitle: '754823651254' },
			{ title: 'GST No.', subtitle: '214522254001884' },
		],
	}),
	components: {},
	methods: {},
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
