<template></template>

<script>
export default {
	data: () => ({}),
	components: {},
	methods: {},
	beforeMount() {
		this.$router.push('/admin')
	},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style></style>
