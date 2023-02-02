<template>
	<v-container class="mt-8">
		<v-sheet outlined class="py-4 px-6 rounded-lg">
			<div class="d-flex align-center mt-n8 ml-8">
				<v-icon class="design--text mr-1">mdi-office-building</v-icon>
				<span class="design--text font-weight-medium text-h6 white">Company Details</span>
			</div>
			<div class="mt-8">
				<div class="d-flex flex-row flex-sm-wrap">
					<div class="mr-8">
						<div class="d-flex flex-row">
							<div class="mr-5">
								<div v-for="(item, index) in items" :key="index">
									<h3 class="text-right font-weight-regular mb-3">{{ item.title }}</h3>
								</div>
							</div>
							<div class="mr-5">
								<div v-for="(item, index) in items" :key="index">
									<h3 class="text-left font-weight-regular mb-3">{{ item.subtitle }}</h3>
								</div>
							</div>
						</div>
					</div>

					<div class="align-self-center">
						<div class="d-flex flex-row">
							<div class="mr-5">
								<div v-for="(item, index) in other_items" :key="index" class="mb-3">
									<h3 class="d-inline text-right font-weight-regular">{{ item.title }}</h3>
								</div>
							</div>
							<div>
								<div v-for="(item, index) in other_items" :key="index" class="mb-3">
									<h3 class="d-inline text-left font-weight-regular mr-3">
										{{ item.subtitle }}
									</h3>
									<v-icon>mdi-file-pdf-box</v-icon>
								</div>
							</div>
						</div>
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

<style></style>
