import Vue from '../sessionManager'
import * as APIBuilder from '../APIBuilder'
import * as URLConstant from '../URLConstant'

const vue = new Vue()

// Get requested company listings
function get(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.default.COMPANYLIST, data)
}

// Update approval status of the company listed
function update(data) {
	return APIBuilder.buildPutRequestWithData(URLConstant.default.COMPANYLISTAPPROVAL, data)
}

function setRequestedCompany(company) {
	vue.setRequestedCompany(company)
}

function getRequestedCompany() {
	return vue.getRequestedCompany()
}

function setRequestedCompanyUsers(users) {
	vue.setRequestedCompanyUsers(users)
}

function getRequestedCompanyUsers() {
	return vue.getRequestedCompanyUsers()
}

export default {
	get,
	update,
	getRequestedCompany,
	setRequestedCompany,
	getRequestedCompanyUsers,
	setRequestedCompanyUsers,
}
