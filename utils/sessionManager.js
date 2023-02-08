class SessionManager {
	install(vue, options) {
		// Authetication related
		Vue.setUser = this.setUser
		Vue.getUser = this.getUser
		Vue.setToken = this.setToken
		Vue.getToken = this.getToken
		Vue.isUserLoggedIn = this.isUserLoggedIn

		// Company related
		Vue.getRequestedCompany = this.getRequestedCompany
		Vue.setRequestedCompany = this.setRequestedCompany
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

	setRequestedCompany(company) {
		localStorage.setItem('company', JSON.stringify(company))
	}

	getRequestedCompany() {
		return JSON.parse(localStorage.getItem('company'))
	}
}

export default SessionManager
