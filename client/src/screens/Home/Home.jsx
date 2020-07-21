import React from 'react'
import Layout from "../../components/shared/Layout/Layout"
import './Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Layout>
      <div className="main">
        <div className="intro">
          <h4 className="h4">We can find you a match</h4>
          <img className="title-img" src="https://svgshare.com/i/N3B.svg" />
        </div>
        <div className="home-ctn">
          <p className="home-p">Welcome to Breathe</p>
          <p className="home-p">We are a supportive community of users and providers</p>
          <p className="home-p">We help you find each other</p>
        </div>
        <Link to="/usercreate"><button className="get-started" type="submit">Get Started</button></Link>
      </div>
    </Layout>
  )
}
