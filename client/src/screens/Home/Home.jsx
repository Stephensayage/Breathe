import React from 'react'
import Layout from "../../components/shared/Layout/Layout"
import './Home.css'

export default function Home() {
  return (
    <Layout>
      <div className="main">
        <div className="intro">
          <h4 className="h4">We can find you a match</h4>
          <h1 className="title">Breathe</h1>
        </div>
        <div className="home-ctn">
          <p>Welcome to Breathe</p>
          <p>We are a supportive community of users and providers</p>
          <p>We help you find each other</p>
        </div>
        <button className="get-started" type="submit">Get Started</button>
      </div>
    </Layout>
  )
}
