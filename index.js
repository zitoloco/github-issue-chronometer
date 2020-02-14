const express = require('express')
const app = express()
require('dotenv').config()

const port = process.env.PORT || 3000;
const githubToken = process.env.GITHUB_TOKEN

app.get('/', (req, res) => res.send(`ola mundo!`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))