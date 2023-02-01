<template>
	<div>
		<div class="text-center">
			<h2>Application No. 111113</h2>
		</div>
		<v-sheet class="grey lighten-3 mt-6 py-5">
			<v-container>
				<div class="d-flex flex-row justify-space-around">
					<div class="mx-4 text-center">
						<h3 class="subtitle-2 grey--text">Time</h3>
						<h3 class="subtitle-1">4:14 am</h3>
					</div>
					<div class="mx-4 text-center">
						<h3 class="subtitle-2 grey--text">Date</h3>
						<h3 class="subtitle-1">16/2/23</h3>
					</div>
					<div class="mx-4 text-center">
						<h3 class="subtitle-2 grey--text">Status</h3>
						<h3 class="subtitle-1 red--text"><v-icon>mdi-book-cancel</v-icon> Rejected</h3>
					</div>
					<div class="mx-4 text-center">
						<h3 class="subtitle-2 grey--text">Attempt</h3>
						<h3 class="subtitle-1">2<sup>nd</sup> Attempt</h3>
					</div>
					<div class="mx-4 text-center">
						<h3 class="subtitle-2 grey--text">Comments (1)</h3>
						<h3 class="subtitle-1 blue--text">View previous comment</h3>
					</div>
				</div>
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
