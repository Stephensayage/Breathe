import React from 'react'
import Layout from "../../components/shared/Layout/Layout"


export default function Home() {
  return (
    <Layout>
      <h4>We can find you a match</h4>
      <h1>Breathe</h1>
      <div className="home-ctn">
        <p>Welcome to Breathe</p>
        <p>We are a supportive community of users and providers</p>
        <p>We help you find each other</p>
      </div>
      <button type="submit">Get Started</button>
    </Layout>

  )
}
