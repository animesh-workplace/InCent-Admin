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
						v-model="payload.password"
						placeholder="Enter your Password"
						:type="show_password ? 'text' : 'password'"
						@click:append="show_password = !show_password"
						:append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
					/>
					<div class="center text-center">
						<v-btn rounded block color="design" dark x-large class="mt-4" @click="Login">
							Login
						</v-btn>
					</div>
				</v-container>
			</v-col>
		</v-row>
	</v-sheet>
</template>

<script>
import * as login from '@/utils/api/LoginAPI'

export default {
	data: () => ({
		payload: {
			user_id: '',
			password: '',
		},
		show_password: false,
		rules: {
			required: (value) => !!value || 'This field is required',
			phoneemail: (input) => {
				if (/^\d+$/.test(input)) {
					return input.length >= 10 || 'Min 10 characters'
				} else {
					return (
						/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(input) ||
						'Please enter correct email'
					)
				}
			},
		},
	}),
	layout: 'login',
	components: {},
	methods: {
		// This function handles the input and checks whether the input is digit or not and then adds or removes +91
		// FixingInput(event) {
		// 	if (/^\d+$/.test(event)) {
		// 		if (!/^\+91/.test(event)) {
		// 			this.payload.user_id = `+91${event}`
		// 		}
		// 	} else {
		// 		this.payload.user_id = event.replace('+91', '')
		// 	}
		// },
		async Login() {
			try {
				const response = await login.default.add(this.payload)
				login.default.setTokenSession(response.data.payload.token)
				login.default.setUserSession(response.data.payload.user)
				this.$router.push('/admin')
			} catch (err) {
				console.log(err)
			}
		},
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
