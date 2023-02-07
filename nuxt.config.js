import colors from 'vuetify/es5/util/colors'

export default {
	ssr: true,
	head: {
		title: 'UniteCloud_Tasks',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},
	css: ['static/css/styles.css'],
	plugins: [],
	components: true,
	buildModules: ['@nuxtjs/vuetify'],
	modules: ['@nuxtjs/axios', '@nuxtjs/auth-next'],
	axios: { baseURL: '/' },
	vuetify: {
		customVariables: ['~/assets/variables.scss'],
		theme: {
			dark: false,
			themes: {
				light: {
					design: '#26477d',
					primary: colors.blue.darken2,
					accent: colors.grey.darken3,
					secondary: colors.amber.darken3,
					info: colors.teal.lighten1,
					warning: colors.amber.base,
					error: colors.deepOrange.accent4,
					success: colors.green.accent4,
				},
			},
		},
	},
	build: {},
	auth: {
		localStorage: false,
		cookie: {
			options: {
				expires: 7,
			},
		},
		strategies: {
			local: {
				endpoints: {
					user: false,
					logout: false,
					login: { url: '/', method: 'post', propertyName: 'token' },
				},
				tokenType: 'Bearer',
				tokenRequired: true,
			},
		},
		redirect: {
			home: '/',
			callback: false,
			// login: '/',
			// logout: '/',
		},
	},
}
