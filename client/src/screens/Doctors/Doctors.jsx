import React, { useState, useEffect } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import { Link } from 'react-router-dom'
import { getDoctors } from "../../services/doctors"
import {getUser} from "../../services/users"
import "./Doctors.css"

export default function Doctors(props) {

  let [showDocs, changeShowDocs] = useState([])

  useEffect(() => {
    const getData = async () => {
      const docShow = await getDoctors()
      changeShowDocs(docShow)

    }
    getData()
  }, [])

  let[user, showUser] = useState([])

  useEffect(() => {
    const getData = async () => {
      let id = props.match.params.id
      const userShow = await getUser(id)
      showUser(userShow)
    }
    getData()
  }, [])


  return (
    <Layout >
    <div className="doctors-container">
        {showDocs.map(doc => <div className="doctor-container"><img className="doctors-images" src={doc.imgUrl}/><h2>{doc.name}</h2><p>{doc.location}</p></div>)}
      </div>
      </Layout>
  )
}
