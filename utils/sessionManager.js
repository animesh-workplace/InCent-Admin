class SessionManager {
	install(vue, options) {
		Vue.setUser = this.setUser
		Vue.getUser = this.getUser
		Vue.setToken = this.setToken
		Vue.getToken = this.getToken
		Vue.isUserLoggedIn = this.isUserLoggedIn
	}

	setUser(user) {
		localStorage.setItem('user', JSON.stringify(user))
	}

	getUser() {
		return JSON.parse(localStorage.getItem('user'))
	}

	setToken(token) {
		localStorage.setItem('token', token)
	}

	getToken() {
		return localStorage.getItem('token')
	}

	isUserLoggedIn() {
		return localStorage.getItem('token') !== null
	}
}

export default SessionManager
