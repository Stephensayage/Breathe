const db = require('../db/connection')
const Doctor = require('../models/doctors')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const doctors =
    [
      {
        "name": "Dr. Max",
        "imgUrl": "https://i.imgur.com/hDC8iKR.png",
        "location" : "Denver",
      },
      {
        "name": "Dr. Catherine",
        "imgUrl": "https://i.imgur.com/hDC8iKR.png",
        "location" : "New York City",
      },
      {
        "name": "Dr. Stephen",
        "imgUrl": "https://i.imgur.com/hDC8iKR.png",
        "location" : "Brookyln",
      },
      {
        "name": "Dr. Kaisha",
        "imgUrl": "https://i.imgur.com/hDC8iKR.png",
        "location" : "Queens",
      }
    ]
  await Doctor.insertMany(doctors)
  console.log("Created docs!")
}
const run = async () => {
  await main()
  db.close()
}

run ()