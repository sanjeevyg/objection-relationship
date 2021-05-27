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

app.get("/students/:id", (request, response) => {
    database("students")
        .select().where({id: request.params.id}).first()
        .then(student => {
            response.json({ student })
        })
})

app.post("/students", (request, response) => {
    const student = request.body
    database("students")
        .insert(student)
        .returning("*")
        .then(student => {
            response.json({ student })
        })
})

app.patch("/students/:id", (request, response) => {
    const student = request.body
    database("students").where({id: request.params.id})
        .update(student)
        .returning("*")
        .then(student => {
            response.json({ student })
        })
})

app.delete("/students/:id", (request, response) => {
    const id = request.params.id
    database("students").where({id: request.params.id})
        .delete()
        .then(() => {
            response.json({message: `student with id ${id} is deleted`  })
        })
})





