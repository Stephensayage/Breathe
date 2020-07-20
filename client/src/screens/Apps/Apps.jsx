import React, { useState, useEffect } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import { Link } from 'react-router-dom'
import api from '../../services/apiConfig'
import { getApps } from "../../services/apps"
import './Apps.css'

export default function Apps() {

  let [showApps, changeShowApps] = useState([])

  useEffect(() => {
    const getData = async () => {
      const appShow = await getApps()
      changeShowApps(appShow)
    }
    getData()
  }, [])

  return (
    <Layout>
      <div className="apps-container">
        {showApps.map(app => <> <div className="app-container"><img src={app.imgUrl} /><button className="this-should-work">Select</button></div></>)}
      </div>
    </Layout>
  )
}
