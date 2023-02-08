<template>
	<v-sheet class="py-9 px-16">
		<div class="text-left mb-6">
			<h1 class="font-weight-medium design--text">Company Application</h1>
			<h3 class="caption">
				These page can be used by Invecent support team to check company application status
			</h3>
		</div>

		<div class="high-margin">
			<v-text-field class="search py-2 pl-6" hide-details placeholder="Search Application">
				<v-icon slot="prepend" color="design" class="mt-0"> mdi-magnify </v-icon>
			</v-text-field>
		</div>

		<div class="mt-8 md-margin">
			<div class="d-flex justify-space-between align-center px-10">
				<div>
					<h4 class="grey--text font-weight-regular">4 Users added</h4>
				</div>
				<div>
					<v-btn outlined color="grey" class="px-2">
						<span class="button_text mr-2">sort on values</span>
						<img width="16" alt="Sort" src="@/assets/sort_icon.png" />
					</v-btn>
				</div>
			</div>

			<v-simple-table class="mx-8 my-4 rounded-lg elevation-2">
				<template v-slot:default>
					<thead>
						<tr>
							<th class="text-center">Sr No.</th>
							<th class="text-center">Application No.</th>
							<th class="text-center">Registered Company Name</th>
							<th class="text-center">Date<br />Time</th>
							<th class="text-center">Status</th>
							<th class="text-center">Comment</th>
							<th class="text-center">Action</th>
						</tr>
					</thead>
					<tbody>
						<tr
							:class="index % 2 ? 'grey lighten-3 text-center' : 'white text-center'"
							v-for="(item, index) in company_details"
							:key="item.name"
						>
							<td>{{ index + 1 }}</td>
							<td>{{ item.application_no }}</td>
							<td>{{ item.company_name }}</td>
							<td>
								{{ $dayjs(item.createdAt).format('DD/MM/YY') }} <br />
								{{ $dayjs(item.createdAt).format('hh:mm a') }}
							</td>
							<td>
								<div v-if="item.status == 'APPROVED'">
									<div class="d-flex align-content-center justify-center">
										<img
											width="22"
											height="22"
											alt="Sucess"
											class="mr-2"
											src="@/assets/icon_success.png"
										/>
										<div>
											<span class="success--text text-caption font-weight-light">
												{{ item.status }}
											</span>
										</div>
									</div>
								</div>
								<div v-if="item.status == 'PENDING'">
									<div class="d-flex align-content-center justify-center">
										<img
											width="22"
											height="22"
											alt="Sucess"
											class="mr-3"
											src="@/assets/icon_pending.png"
										/>
										<div>
											<span class="grey--text text-caption font-weight-light">
												{{ item.status }}
											</span>
										</div>
									</div>
								</div>
								<div v-if="item.status == 'REJECTED'">
									<div class="d-flex align-content-center justify-center">
										<img
											width="22"
											height="22"
											alt="Sucess"
											class="mr-3"
											src="@/assets/icon_reject.png"
										/>
										<div>
											<span class="error--text text-caption font-weight-light">
												{{ item.status }}
											</span>
										</div>
									</div>
								</div>
							</td>
							<td>
								<div class="text-center">
									<h6 class="grey--text font-weight-regular text-subtitle-2">NA</h6>
									<h6 class="grey--text font-weight-regular">(Not applicable)</h6>
								</div>
							</td>
							<td>
								<v-btn
									small
									color="design"
									class="text-caption text-capitalize"
									@click="ChangePage(item, index)"
								>
									<span class="mr-2 white--text">View Application</span>
									<img
										width="20"
										height="20"
										alt="Sucess"
										class="mt-1"
										src="@/assets/eye_icon.png"
									/>
								</v-btn>
							</td>
						</tr>
					</tbody>
				</template>
			</v-simple-table>
		</div>
	</v-sheet>
</template>

<script>
import * as company from '@/utils/api/RequestCompanyAPI'

export default {
	data: () => ({
		company_details: [],
	}),
	layout: 'admin',
	components: {},
	methods: {
		ChangePage(item) {
			company.default.setRequestedCompany(item)
			this.$router.push(`/company/${item.application_no}`)
		},
		async GetCompany() {
			try {
				const response = await company.default.get({ status: 'ALL' })
				this.company_details = response.data.payload.map((d) => d.request_company)
			} catch (err) {
				console.log(err)
			}
		},
	},
	mounted() {
		this.$nextTick(() => {
			this.GetCompany()
		})
	},
}
</script>

<style scoped>
.search {
	border-radius: 46px;
	border: 1px solid #9a9a9a;
}
.high-margin {
	margin-left: 200px;
	margin-right: 200px;
}
.md-margin {
	margin-left: 52px;
	margin-right: 52px;
}
.button_text {
	color: #929292;
	font-size: 10px;
	font-weight: 400;
	line-height: 12px;
	font-style: normal;
	text-align: center;
	letter-spacing: 1px;
	text-transform: lowercase;
}
</style>
