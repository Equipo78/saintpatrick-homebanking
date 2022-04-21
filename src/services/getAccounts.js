import axios from 'axios'

const fromApiResponseToAccounts = (apiResponse) => {
  const { data = [] } = apiResponse

  return data
}

const getAccounts = () => {
  const apiURL = `https://app-bancaria.herokuapp.com/accounts`

  return axios
    .get(apiURL)
    .catch(function (error) {
      console.log(error)
    })
    .then(fromApiResponseToAccounts)
}

export default getAccounts
