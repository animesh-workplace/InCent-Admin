import Vue from '../sessionManager'
import * as APIBuilder from '../APIBuilder'
import * as URLConstant from '../URLConstant'

const vue = new Vue()

// Get requested company listings
function get(data) {
	return APIBuilder.buildGetRequestWithData(URLConstant.default.COMPANYLIST, data)
}

export default {
	get,
}
