<template>
	<div>
		<div class="text-center">
			<h2 class="text-h5">Application No. {{ info.application_no }}</h2>
		</div>
		<v-sheet class="grey lighten-3 mt-6 py-5">
			<v-container>
				<v-row>
					<v-col>
						<div class="mx-4 text-center">
							<h3 class="subtitle-2 grey--text">Time</h3>
							<h3 class="subtitle-1">{{ $dayjs(info.updatedAt).format('hh:mm a') }}</h3>
						</div>
					</v-col>
					<v-col>
						<div class="mx-4 text-center">
							<h3 class="subtitle-2 grey--text">Date</h3>
							<h3 class="subtitle-1">{{ $dayjs(info.updatedAt).format('DD/MM/YY') }}</h3>
						</div>
					</v-col>
					<v-col>
						<div class="mx-4 text-center">
							<h3 class="subtitle-2 grey--text">Status</h3>
							<!-- 							<div class="d-flex justify-center">
								<img
									width="22"
									height="22"
									alt="Sucess"
									class="mr-3"
									src="@/assets/icon_reject.png"
								/>
								<div>
									<span class="red--text subtitle-1 font-weight-light"> Rejected </span>
								</div>
							</div> -->

							<div v-if="info.status == 'APPROVED'">
								<div class="d-flex align-content-center justify-center">
									<img
										width="22"
										height="22"
										alt="Sucess"
										class="mr-2"
										src="@/assets/icon_success.png"
									/>
									<div>
										<span class="success--text subtitle-1 font-weight-light">
											{{ info.status }}
										</span>
									</div>
								</div>
							</div>
							<div v-if="info.status == 'PENDING'">
								<div class="d-flex align-content-center justify-center">
									<img
										width="22"
										height="22"
										alt="Sucess"
										class="mr-3"
										src="@/assets/icon_pending.png"
									/>
									<div>
										<span class="grey--text subtitle-1 font-weight-light">
											{{ info.status }}
										</span>
									</div>
								</div>
							</div>
							<div v-if="info.status == 'REJECTED'">
								<div class="d-flex align-content-center justify-center">
									<img
										width="22"
										height="22"
										alt="Sucess"
										class="mr-3"
										src="@/assets/icon_reject.png"
									/>
									<div>
										<span class="error--text subtitle-1 font-weight-light">
											{{ info.status }}
										</span>
									</div>
								</div>
							</div>
						</div>
					</v-col>
					<v-col>
						<div class="mx-4 text-center">
							<h3 class="subtitle-2 grey--text">Attempt</h3>
							<h3 class="subtitle-1">2<sup>nd</sup> Attempt</h3>
						</div>
					</v-col>
					<v-col>
						<div class="mx-4 text-center">
							<h3 class="subtitle-2 grey--text">Comments (1)</h3>
							<h3 class="subtitle-1 blue--text">View previous comment</h3>
						</div>
					</v-col>
				</v-row>
			</v-container>
		</v-sheet>
	</div>
</template>

<script>
export default {
	data: () => ({}),
	props: { info: { type: Object, required: true } },
	components: {},
	methods: {},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style></style>
