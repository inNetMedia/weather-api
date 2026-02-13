require('dotenv').config();
const express = require('express'),
    app = express(),
    PORT = process.env.PORT || 3500,
    cors = require('cors'),
    corsOptions = require('./config/corsConfig'),
    credentials = require('./middleware/credentials');

app.use(credentials)
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//Routes
app.use('/', require('./routes/api'))

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`))