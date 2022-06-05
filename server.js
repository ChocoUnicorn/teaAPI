const express = require('express')
const app = express()
const cors = require('cors')
const { request } = require('express')
const { response } = require('express')
const PORT = 8000


const tea = {
    'oolong': {
        'type': 'white',
        'origin': 'china',
        'waterTemp': 80,
        'steepTime': 200,
        'caffeinated': true,
        'flavour': 'strong'
    },
    'macha': {
        'type': 'green',
        'origin': 'china',
        'waterTemp': 90,
        'steepTime': 200,
        'caffeinated': true,
        'flavour': 'very strong'
    },

    'black': {
        'type': 'black',
        'origin': 'china',
        'waterTemp': 90,
        'steepTime': 200,
        'caffeinated': true,
        'flavour': 'strong'
    },

    'unknown': {
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 'unknown',
        'steepTime': 'unknown',
        'caffeinated': 'unknown',
        'flavour': 'unknown'
    }
}

app.use(cors())

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response) => {
    response.json(tea)
})

app.get('/api/:name', (request, response) => {
    let teaName = request.params.name.toLowerCase()
    if (tea[teaName]){
        response.json(tea[teaName])
    } else {
        response.json(tea['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`This server is running and A OK on ${PORT}. Cant touch this`)
})