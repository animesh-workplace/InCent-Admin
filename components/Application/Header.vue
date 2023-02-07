<template>
	<div>
		<div class="text-center">
			<h2 class="text-h5">Application No. 111113</h2>
		</div>
		<v-sheet class="grey lighten-3 mt-6 py-5">
			<v-container>
				<v-row>
					<v-col>
						<div class="mx-4 text-center">
							<h3 class="subtitle-2 grey--text">Time</h3>
							<h3 class="subtitle-1">4:14 am</h3>
						</div>
					</v-col>
					<v-col>
						<div class="mx-4 text-center">
							<h3 class="subtitle-2 grey--text">Date</h3>
							<h3 class="subtitle-1">16/2/23</h3>
						</div>
					</v-col>
					<v-col>
						<div class="mx-4 text-center">
							<h3 class="subtitle-2 grey--text">Status</h3>
							<div class="d-flex justify-center">
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
	components: {},
	methods: {},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style></style>
