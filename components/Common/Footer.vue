<template>
	<v-footer app color="design" class="py-3">
		<!-- <div class="d-flex"> -->
		<div class="d-flex flex-row flex-wrap white--text mr-auto mb-4 mb-sm-0">
			<div class="mr-10">About us</div>
			<div class="mr-10">Privacy Policy</div>
			<div class="mr-10">Terms of Use</div>
			<div class="mr-10">Contact Us</div>
		</div>
		<!-- <div class="flex-grow-1"></div> -->
		<v-spacer class="flex-grow-0 flex-md-grow-1" />
		<div class="d-flex flex-row flex-wrap white--text">
			<div class="mr-10"><v-icon color="white">mdi-linkedin</v-icon></div>
			<div class="mr-10"><v-icon color="white">mdi-facebook</v-icon></div>
			<div class="mr-10"><v-icon color="white">mdi-youtube</v-icon></div>
		</div>
		<!-- </div> -->
	</v-footer>
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
