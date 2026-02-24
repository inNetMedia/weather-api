const whiteList = ['www.innetmedia.com','innetmedia.com','http://127.0.0.1:5500', 'https://innetmedia.github.io/weatherApp0.1/'];

const credentials = (req, res, next) => {
    const origin = req.headers.origin
    if(whiteList.includes(origin)){
        res.header({ 'Access-Control-Allow-Credentials': true })
    }
    next()
}

module.exports = credentials