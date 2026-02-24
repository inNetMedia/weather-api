const whiteList = ['http://127.0.0.1:5500', 'https://innetmedia.github.io/weatherApp0.1/']

const corsOptions = {
    origin:(origin, callback) => {
        if(whiteList.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        }else{
            callback(new Error('Not allowed by CORS!'))
        }
    },
    optionsSuccessStatus:200
}

module.exports = corsOptions