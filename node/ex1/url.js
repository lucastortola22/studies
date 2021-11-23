const url = require('url')

const address = 'https://arterialgroup.com/default.html?year=2007&month=february'

const parseUrl = url.parse(address, url)


console.log(parseUrl.host)
console.log(parseUrl.pathname)
console.log(parseUrl.query)
console.log(parseUrl.query.month)