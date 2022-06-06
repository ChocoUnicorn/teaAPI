const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000


const tea = {
    'oolong': {
        'type': 'white',
        'origin': 'china',
        'waterTemp': 80,
        'steepTime': 200,
        'caffeinated': true,
        'flavour': 'strong',
        'isHerbal': true,
        'image':'https://images.pexels.com/photos/6545346/pexels-photo-6545346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    'macha': {
        'type': 'green',
        'origin': 'china',
        'waterTemp': 90,
        'steepTime': 200,
        'caffeinated': true,
        'flavour': 'very strong',
        'isHerbal': true,
        'image':'https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },

    'black': {
        'type': 'black',
        'origin': 'china',
        'waterTemp': 90,
        'steepTime': 200,
        'caffeinated': true,
        'flavour': 'strong',
        'isHerbal': false,
        'image':'https://images.pexels.com/photos/1493080/pexels-photo-1493080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },

    'charmomile': {
        'type': 'yellow',
        'origin': 'china',
        'waterTemp': 80,
        'steepTime': 200,
        'caffeinated': false,
        'flavour': 'mild',
        'isHerbal': true,
        'image':'https://cdn.mos.cms.futurecdn.net/Fi4jRrhVKLFzZSkgdqbbKF.jpg'
    },

    'raspberry': {
        'type': 'red',
        'origin': 'china',
        'waterTemp': 80,
        'steepTime': 200,
        'caffeinated': false,
        'flavour': 'mild',
        'isHerbal': true,
        'image':'https://www.mysequinedlife.com/wp-content/uploads/2016/08/iced-raspberry-mint-green-tea-3.jpg'
    },
    'green': {
        'type': 'green',
        'origin': 'china',
        'waterTemp': 90,
        'steepTime': 200,
        'caffeinated': true,
        'flavour': 'medium',
        'isHerbal': true,
        'image':'https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },

    'earlgrey': {
        'type': 'black',
        'origin': 'china',
        'waterTemp': 90,
        'steepTime': 200,
        'caffeinated': true,
        'flavour': 'medium',
        'isHerbal': false,
        'image':'https://www.billi-uk.com/wp-content/uploads/2017/09/Hetties-Earl-Grey-1024x683.jpg'
    },

    'darjeeling': {
        'type': 'black',
        'origin': 'china',
        'waterTemp': 90,
        'steepTime': 200,
        'caffeinated': true,
        'flavour': 'strong',
        'isHerbal': false,
        'image':'http://teafloor.com/blog/wp-content/uploads/2018/11/darjeeling-tea1.png'
    },

    'unknown': {
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 'unknown',
        'steepTime': 'unknown',
        'caffeinated': 'unknown',
        'flavour': 'unknown',
        'isHerbal': 'unknown',
        'image': 'https://www.pexels.com/photo/silver-round-accessory-with-storage-227908/'
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
    let teaName = request.params.name.toLowerCase().split(' ').join('')
    if (tea[teaName]){
        response.json(tea[teaName])
    } else {
        response.json(tea['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`This server is running and A OK on ${PORT}. Cant touch this`)
})