<template>
	<v-container class="mt-8">
		<v-sheet outlined class="py-4 px-6 rounded-lg thick-outline">
			<div class="d-flex align-center mt-n8 ml-8">
				<div class="white">
					<v-icon class="design--text mr-1 mb-1">mdi-account</v-icon>
					<span class="design--text font-weight-medium text-h6 white">Users</span>
				</div>
			</div>
			<div class="mt-8">
				<h4 class="grey--text font-weight-regular pl-10">4 Users added</h4>

				<v-simple-table class="mx-6 my-4 rounded-lg elevation-2">
					<template v-slot:default>
						<thead>
							<tr>
								<th class="text-center">Sr No.</th>
								<th class="text-center">Name</th>
								<th class="text-center">Designation</th>
								<th class="text-center">Mobile no.</th>
								<th class="text-center">Email ID</th>
								<th class="text-center">Profile</th>
							</tr>
						</thead>
						<tbody>
							<tr
								:key="index"
								v-for="(item, index) in users"
								:class="index % 2 ? 'grey lighten-3' : 'white'"
							>
								<td class="text-center">{{ index + 1 }}</td>
								<td class="text-center">{{ item.name }}</td>
								<td class="text-center">{{ item.designation }}</td>
								<td class="text-center">{{ item.mobile_no }}</td>
								<td class="text-center">{{ item.email_id }}</td>
								<td class="text-center">{{ item.profile }}</td>
							</tr>
						</tbody>
					</template>
				</v-simple-table>
			</div>
		</v-sheet>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		items: [
			{
				name: 'Vedant Parte',
				designation: 'IT',
				mobile: '7458963254',
				email: 'vedantaparte77@gmail.com',
				profile: 'seller',
			},
			{
				name: 'Vedant Parte',
				designation: 'IT',
				mobile: '7458963254',
				email: 'vedantaparte77@gmail.com',
				profile: 'seller',
			},
			{
				name: 'Vedant Parte',
				designation: 'IT',
				mobile: '7458963254',
				email: 'vedantaparte77@gmail.com',
				profile: 'seller',
			},
			{
				name: 'Vedant Parte',
				designation: 'IT',
				mobile: '7458963254',
				email: 'vedantaparte77@gmail.com',
				profile: 'seller',
			},
		],
	}),
	props: { users: { type: Object, required: true } },
}
</script>

<style scoped>
.thick-outline {
	border: solid 1.5px;
}
</style>
