const express = require('express')

const routes = express.Router()

routes.get('/', (Request, Response) => {
    return Response.json({
        "Aluno":"Jaime Rodrigues"
    })
})

module.exports =routes;