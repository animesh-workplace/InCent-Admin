import Vue from '../sessionManager'
import * as APIBuilder from '../APIBuilder'
import * as URLConstant from '../URLConstant'

const vue = new Vue()

// Login
function add(data) {
	return APIBuilder.buildPostRequest(URLConstant.default.LOGINDATA, data)
}

function createSession() {
	vue.setToken(token)
	vue.setUser(user)
}

function closeSession() {
	vue.logout()
}

function setUserSession(user) {
	vue.setUser(user)
}

function getUserSession() {
	return vue.getUser()
}

function setTokenSession(token) {
	vue.setToken(token)
}

function getTokenSession() {
	vue.getToken()
}

function isUserLoggedIn() {
	return vue.isUserLoggedIn()
}

export default {
	add,
	closeSession,
	createSession,
	setUserSession,
	getUserSession,
	isUserLoggedIn,
	setTokenSession,
	getTokenSession,
}
