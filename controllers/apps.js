const App = require('../models/apps')
const db = require('../db/connection')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getApps = async (req, res) => {
  try {
    const apps = await App.find()
    res.json(apps)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getApp = async (req, res) => {
  try {
    const { id } = req.params
    const app = await App.findById(id)
    if (app) {
      return res.json(app)
    }
    res.status(404).json({ message: 'App not found!' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createApp = async (req, res) => {
  try {
    const app = await new App(req.body)
    await app.save()
    res.status(201).json(app)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

const updateApp = async (req, res) => {
  const { id } = req.params
  await App.findByIdAndUpdate(id, req.body, { new: true }, (error, app) => {
    if (error) {
      return res.status(500).json({ error: error.message })
    }
    if (!app) {
      return res.status(404).json({ message: 'App not found!' })
    }
    res.status(200).json(app)
  })
}

const deleteApp = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await App.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("App deleted")
    }
    throw new Error("App not found")
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createApp,
  getApps,
  getApp,
  updateApp,
  deleteApp
}