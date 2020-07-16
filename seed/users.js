const db = require('../db/connection')
const User = require('../models/users')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const users = 
    [
      {
        "name": "Tiffany",
        "email": "tiffany@gmail.com",
        "password": "Breathe123",
        "imgUrl": "https://i.imgur.com/YvDYJMe.png",
        "location": "Philadelphia, PA",

      },
      {
        "name": "Stephen",
        "email": "stephen@gmail.com",
        "password": "Project3",
        "imgUrl": "https://i.imgur.com/HB9Ou6x.png",
        "location": "New York, NY",

      },
      {
        "name": "Catherine",
        "email": "catherine@gmail.com",
        "password": "Project3",
        "imgUrl": "https://i.imgur.com/00xd3pX.jpg",
        "location": "New York, NY",

      },
      {
        "name": "Max",
        "email": "max@gmail.com",
        "password": "Project3",
        "imgUrl": "https://i.imgur.com/vMj93k3.png",
        "location": "New York, NY",

      },
      {
        "name": "Kaisha",
        "email": "kaisha@gmail.com",
        "password": "project3",
        "imgUrl": "https://i.imgur.com/J8s94ZZ.jpg",
        "location": "New York, NY",

      },
    ]
  await User.insertMany(users)
  console.log("Created users!")
}

const run = async () => {
  await main()
  db.close()
}

run ()