import axios from 'axios'
import Vue from './sessionManager'

const vue = new Vue()

function buildGetRequest(url) {
	var headers = {}
	if (vue.isUserLoggedIn()) {
		headers['authorization'] = 'Bearer ' + vue.getToken()
	}
	return axios.get(url, { headers: headers })
}

function buildGetRequestWithData(url, data) {
	var headers = {}
	if (vue.isUserLoggedIn()) {
		headers['authorization'] = 'Bearer ' + vue.getToken()
	}
	return axios({
		url: url,
		method: 'get',
		headers: headers,
		params: data,
	})
}

function buildGetRequestWithResponseType(url, responseType) {
	var headers = {}
	if (vue.isUserLoggedIn()) {
		headers['authorization'] = 'Bearer ' + vue.getToken()
	}
	return axios({
		method: 'get',
		url: url,
		responseType: responseType,
	})
}

function buildPostRequest(url, data) {
	var headers = {}
	if (vue.isUserLoggedIn()) {
		headers['authorization'] = 'Bearer ' + vue.getToken()
	}
	return axios.post(url, data, { headers: headers })
}

function buildFilePostRequest(url, data) {
	var headers = {}
	if (vue.isUserLoggedIn()) {
		headers['authorization'] = 'Bearer ' + vue.getToken()
	}
	headers['Content-Type'] = 'multipart/form-data'

	return axios.post(url, data, { headers: headers })
}

function buildPutRequest(url, data) {
	var headers = {}
	if (vue.isUserLoggedIn()) {
		headers['authorization'] = 'Bearer ' + vue.getToken()
	}

	return axios.put(url, data, { headers: headers })
}
// query para put method
function buildPutRequestWithData(url, data) {
	var headers = {}
	if (vue.isUserLoggedIn()) {
		headers['authorization'] = 'Bearer ' + vue.getToken()
	}

	return axios.put(url, data, { headers: headers, params: data })
}

function buildDeleteRequest(url) {
	var headers = {}
	if (vue.isUserLoggedIn()) {
		headers['authorization'] = 'Bearer ' + vue.getToken()
	}
	return axios.delete(url, { headers: headers })
}

export {
	buildGetRequest,
	buildGetRequestWithResponseType,
	buildPutRequest,
	buildPostRequest,
	buildFilePostRequest,
	buildDeleteRequest,
	buildGetRequestWithData,
	buildPutRequestWithData,
}
