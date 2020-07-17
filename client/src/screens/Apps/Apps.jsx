import React, { useState, useEffect } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import { Link } from 'react-router-dom'
import api from '../../services/apiConfig'
import { getApps } from "../../services/apps"

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
    <div>
      {showApps.map(app =><> <h2>{app.name}</h2><img src={app.imgUrl} /></>)}
    </div>
  )
}
