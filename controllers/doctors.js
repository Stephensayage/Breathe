const Doctor = require('../models/doctors')
const db = require('../db/connection')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find()
    res.json(doctors)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getDoctors
}