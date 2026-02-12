require('dotenv').config();
const express = require('express'),
    app = express(),
    PORT = process.env.PORT || 3500;

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//Routes
app.use('/', require('./routes/api'))

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`))