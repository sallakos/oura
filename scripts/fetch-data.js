require('dotenv').config()
const axios = require('axios')
const fs = require('fs')
const path = require('path')

const baseUrl = process.env.OURA_API_URL
const token = process.env.OURA_AUTH_TOKEN

const acceptedArgs = ['sleep', 'activity', 'readiness']
const dir = 'data'

const fetchType = type => {
  if (acceptedArgs.includes(type)) {
    return axios
      .get(`${baseUrl}${type}?start=2020-05-01&access_token=${token}`)
      .then(response => saveData(response.data, type))
  } else {
    console.error(`${type} is not a valid type`)
  }
}

const saveData = (data, type) =>
  fs.writeFile(path.join(dir, `${type}.json`), JSON.stringify(data), error => {
    if (error) console.error(error)
    else {
      console.log(`${type} fetch successful`)
    }
  })

const fetchData = args => {
  if (args.length === 0) {
    args = acceptedArgs
  }
  args.forEach(arg => fetchType(arg))
}

fetchData(process.argv.slice(2))
