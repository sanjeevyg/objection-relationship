const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const knex = require('knex')
const connection = require('knexfile.js')['development']
const databse = knex(connection)
const {Model} = require('objection')
app.use(express.json())

app.get("/students", (request, response) => {
    database("students")
        .select()
        .then(students => {
            response.json({ students })
        })
})



