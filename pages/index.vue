<template>
	<v-sheet>
		<v-container>
			<v-file-input class="d-block" placeholder="Im label" prepend-icon="mdi-file-pdf-box"></v-file-input>
			<!-- <v-file-input chips prepend-icon="" prepend-inner-icon="" placeholder="Im label"></v-file-input> -->
		</v-container>
	</v-sheet>
</template>

<script>
export default {
	data: () => ({}),
	layout: 'login',
	components: {},
	methods: {},
	beforeMount() {
		// this.$router.push('/admin')
	},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style scoped></style>
