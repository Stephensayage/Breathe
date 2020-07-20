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
      <div classname="meditation-container">
        <img className="meditation-image" src="https://svgshare.com/i/N2S.svg" />
        <p><strong>MEDITATION</strong></p>
        </div>
      <div className="apps-container">
        {showApps.map(app => <> <div className="app-container"><img className="apps-images" src={app.imgUrl} /><button className="this-should-work">Select</button></div></>)}
      </div>
    </Layout>
  )
}
