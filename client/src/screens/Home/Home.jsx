import React from 'react'
// import Footer from "./components/shared/Footer"
import { Nav } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import './Home.css'


const Home = () => {
  return (<>
    <Nav className="justify-content-center height: 200px" as="ul">
      <Nav.Item as="li">
        <Nav.Link className="text-dark" href="/account">My Account</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link className="text-dark" eventKey="matches">My Matches</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link className="text-dark" eventKey="favorites">Favorites</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link className="text-dark" eventKey="explore">Explore Services</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link className="text-dark" href="/confidentiality" eventKey="confidentiality">Confidentiality Agreement</Nav.Link>
      </Nav.Item>
      <h5>Sign In</h5>
    </Nav>
    <div className="main">
      <h4>We can find you a match</h4>
      <h1>Breathe</h1>
      <div className="home-ctn">
        <p>Welcome to Breathe</p>
        <p>We are a supportive community of users and providers</p>
        <p>We help you find each other</p>
      </div>
      <Button className="get-started" type="submit">Get Started</Button>
    </div>
  </>
  )
}

export default Home
