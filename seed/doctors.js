const db = require('../db/connection')
const Doctor = require('../models/doctors')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const doctors =
    [
      {
        "name": "Dr. Chad",
        "imgUrl": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.zinoti.lt%2Fwp-content%2Fuploads%2F2019%2F02%2Fdepositphotos_50884477-stock-photo-smiling-happy-doctor-giving-a.jpg&f=1&nofb=1",
        "location" : "Denver",
      },
      {
        "name": "Dr. Sara",
        "imgUrl": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Ffemale-doctor-standing-in-hospital-corridor-picture-id830343990%3Fk%3D6%26m%3D830343990%26s%3D612x612%26w%3D0%26h%3Da2pdr61gmefo_CwEAnoczTPvtTFh_DVYf96KrVHRblI%3D&f=1&nofb=1",
        "location" : "New York City",
      },
      {
        "name": "Dr. Ashley",
        "imgUrl": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.essence.com%2Fwp-content%2Fuploads%2F2017%2F10%2F1508963400%2FGettyImages-638647058-860x860.jpg&f=1&nofb=1",
        "location" : "Brookyln",
      },
      {
        "name": "Dr. Adam",
        "imgUrl": "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fnationalpainreport.com%2Fwp-content%2Fuploads%2F2014%2F07%2Fbigstock-Doctor-physician-Isolated-ov-339083421-e1440023840513.jpg&f=1&nofb=1",
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