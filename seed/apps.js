const db = require('../db/connection')
const App = require('../models/apps')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const apps =
    [
      {
        "name": "HEADSPACE",
        "imgUrl": "https://i.imgur.com/hDC8iKR.png",
      },
      {
        "name": "CALM",
        "imgUrl": "https://i.imgur.com/b2RvnZh.png",
      },
      {
        "name": "SIMPLE HABIT",
        "imgUrl": "https://i.imgur.com/5BEehIn.png" ,
      },
      {
        "name": "Breeth: Meditation App",
        "imgUrl": "https://i.imgur.com/4cvkDDh.jpg",
      },
      {
        "name": "Shine: Calm Anxiety & Stress",
        "imgUrl": "https://i.imgur.com/FFn6M2N.png",
      },
      {
        "name": "Mantra - Daily Affirmations",
        "imgUrl": "https://i.imgur.com/HgWkyUm.png",
      },
      {
        "name": "MINDBODY: Fitness App",
        "imgUrl": "https://i.imgur.com/vuiNvfR.jpg",
      },
    ]
  await App.insertMany(apps)
  console.log("Created apps!")
}
const run = aysnc() => {
  await main()
  db.close()
}

run ()