import Vue from '../sessionManager'
import * as APIBuilder from '../APIBuilder'
import * as URLConstant from '../URLConstant'

const vue = new Vue()

// Get requested company listings
function get(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.default.COMPANYLIST, data)
}

function setRequestedCompany(company) {
	vue.setRequestedCompany(company)
}

function getRequestedCompany() {
	return vue.getRequestedCompany()
}

export default {
	get,
	getRequestedCompany,
	setRequestedCompany,
}
