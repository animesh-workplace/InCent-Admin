<template>
	<v-sheet class="margin-high mx-auto rounded-lg center" elevation="4">
		<v-row>
			<v-col align-self="center" class="border-col">
				<img src="@/assets/hero.png" alt="Hero" />
			</v-col>
			<v-col class="pa-4">
				<v-container class="center mt-10">
					<span class="text-label text-h6">Mobile No./ Email</span>
					<v-text-field
						outlined
						class="mt-2"
						v-model="payload.user_id"
						:rules="[rules.required, rules.phoneemail]"
						placeholder="Enter your own Mobile No./ Email"
					/>
					<span class="text-label text-h6">Password</span>
					<v-text-field
						outlined
						password
						class="mt-2"
						:rules="[rules.required]"
						placeholder="Enter your Password"
						:type="show_password ? 'text' : 'password'"
						@click:append="show_password = !show_password"
						:append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
					/>
					<div class="center text-center">
						<v-btn rounded block color="design" dark x-large class="mt-4"> Login </v-btn>
					</div>
				</v-container>
			</v-col>
		</v-row>
	</v-sheet>
</template>

<script>
export default {
	data: () => ({
		payload: {
			user_id: '',
			password: '',
		},
		show_password: false,
		rules: {
			required: (value) => !!value || 'Required.',
			phoneemail: (input) => {
				if (/^\d+$/.test(input)) {
					return input.length >= 10 || 'Min 10 characters'
				} else {
					return (
						/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(input) ||
						'Please enter correct mail'
					)
				}
			},
		},
	}),
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
.center {
	width: 70%;
	margin: auto;
	padding: 10px;
}
.border-col {
	border-right: 2px solid #c4c4c4;
}
.text-label {
	color: #26467e;
	font-size: 14px;
	font-weight: 400;
	line-height: 17px;
	font-style: normal;
}
</style>
