<template>
	<v-container class="mt-8">
		<v-sheet class="py-4 px-6">
			<div class="text-left">
				<h2 class="text-h5 design--text mb-4">Company Application</h2>
				<h3 class="caption">
					These page can be used by Invecent support team to check company application status
				</h3>
			</div>

			<div class="mt-8">
				<h4 class="grey--text font-weight-regular pl-10">4 Users added</h4>

				<v-simple-table class="mx-6 my-4 rounded-lg elevation-2">
					<template v-slot:default>
						<thead>
							<tr>
								<th class="text-left">Sr No.</th>
								<th class="text-left">Application No.</th>
								<th class="text-left">Registered Company Name</th>
								<th class="text-left">Date<br />Time</th>
								<th class="text-left">Status</th>
								<th class="text-left">Comment</th>
								<th class="text-left">Action</th>
							</tr>
						</thead>
						<tbody>
							<tr
								:class="index % 2 ? 'grey lighten-3' : 'white'"
								v-for="(item, index) in desserts"
								:key="item.name"
							>
								<td>{{ index + 1 }}</td>
								<td>{{ item.app_no }}</td>
								<td>{{ item.company }}</td>
								<td>
									{{ item.date }} <br />
									{{ item.time }}
								</td>
								<td>{{ item.status }}</td>
								<td>{{ item.comment }}</td>
								<td>button</td>
							</tr>
						</tbody>
					</template>
				</v-simple-table>
			</div>
		</v-sheet>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		desserts: [
			{
				app_no: '1111111',
				company: 'Procter & Gamble',
				date: '16/2/23',
				time: '4:14am',
				status: 'Approved',
				comment: 'NA',
				link: '',
			},
			{
				app_no: '1111111',
				company: 'Procter & Gamble',
				date: '16/2/23',
				time: '4:14am',
				status: 'Pending',
				comment: 'NA',
				link: '',
			},
			{
				app_no: '1111111',
				company: 'Procter & Gamble',
				date: '16/2/23',
				time: '4:14am',
				status: 'Rejected',
				comment: 'NA',
				link: '',
			},
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
