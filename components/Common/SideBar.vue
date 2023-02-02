<template>
	<v-navigation-drawer clipped fixed app class="elevation-4" color="design" v-model="visible">
		<div class="d-flex justify-end">
			<v-btn icon right color="white" @click="HideNav">
				<v-icon>mdi-chevron-double-left</v-icon>
			</v-btn>
		</div>

		<v-list>
			<v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact class="white--text">
				<v-list-item-action>
					<v-icon color="white">{{ item.icon }}</v-icon>
				</v-list-item-action>
				<v-list-item-content>
					<v-list-item-title v-text="item.title" />
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
export default {
	data: () => ({
		visible: true,
		items: [
			{
				icon: 'mdi-view-dashboard',
				title: 'Dashboard',
				to: '/',
			},
			{
				icon: 'mdi-server',
				title: 'Add Master Channels',
				to: '/',
			},
			{
				icon: 'mdi-office-building-outline',
				title: 'Company Applications',
				to: '/',
			},
		],
	}),
	methods: {
		HideNav() {
			this.visible = !this.visible
		},
	},
	mounted() {
		this.$nextTick(() => {})
	},
}
</script>

<style></style>
