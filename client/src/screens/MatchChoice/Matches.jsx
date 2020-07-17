import { Link } from 'react-router-dom';
import React from 'react'

export default function Matches() {
  return (
    <div className = "choices-container">

      <div className="one-choice-container">
        <img src="mental-health-image" />
        <button>1:1 Counseling</button>
      </div>

      <div className="group-choice-container">
        <img src="mental-health-image" />
        <button>Group Counseling</button>
      </div>

      <div className="app-choice-container">
        <img src="mental-health-image" />
        <Link to="/apps">
          <button>Apps</button>
        </Link>
      </div>

    </div>
  )
}
