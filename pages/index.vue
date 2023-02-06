<template>
	<v-sheet class="margin-high mx-auto rounded-lg" elevation="4">
		<v-container>
			<v-row>
				<v-col align-self="center">
					<img src="@/assets/hero.png" alt="Hero" />
				</v-col>
				<v-col>
					<v-text-field outlined persistent-hint label="Mobile No./ Email"></v-text-field>
					<v-text-field outlined persistent-hint label="Password" hide-details></v-text-field>
					<v-btn rounded color="design" dark class="mt-4"> Login </v-btn>
				</v-col>
			</v-row>
		</v-container>
	</v-sheet>
</template>

<script>
export default {
	data: () => ({}),
	layout: 'login',
	components: {},
	methods: {},
	beforeMount() {},
	mounted() {
		this.$nextTick(() => {
			// this.$auth.loginWith('http://15.206.222.49:3000/incentUser/loginIncentUser')
		})
	},
}
</script>

<style scoped>
.margin-high {
	margin-top: 100px;
}
</style>
