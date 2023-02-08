const BASE_URL = 'http://15.206.222.49:3000/api'
const LOGINDATA = `${BASE_URL}/incentUser/loginIncentUser`
const COMPANYLIST = `${BASE_URL}/incentUser/getAllRegisteredCompanyListByStatus`
const COMPANYLISTAPPROVAL = `${BASE_URL}/incentUser/updateRequestedCompanyStatus`

export default { LOGINDATA, COMPANYLIST, COMPANYLISTAPPROVAL }
