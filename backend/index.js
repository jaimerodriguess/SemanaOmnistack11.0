const express = require('express')

const app = express()

app.get('/', (Request, Response) => {
    return Response.json({
        "Aluno":"Jaime Rodrigues"
    })
})

app.listen(3333)
