import { Link } from 'react-router-dom';
import React from 'react';
import "./Matches.css";
import Layout from '../../components/shared/Layout/Layout';


export default function Matches() {
  return (
    <Layout>
    <>
    <h4>
        Based on your answers,
        Here are the top categories you matched with.
    </h4>
    <div className = "choices-container">

      <div className="one-choice-container">
        <img className="choices-image" src="https://svgshare.com/i/N2G.svg" />
        <button className="this-should-work"><strong>1:1 Counseling</strong></button>
      </div>

      <div className="one-choice-container">
        <img className="choices-image" src="https://svgshare.com/i/N32.svg" />
        <button className="this-should-work"><strong>Group Counseling</strong></button>
      </div>

      <div className="one-choice-container">
        <img className="choices-image" src="https://svgshare.com/i/N2v.svg" />
        <Link to="/apps">
          <button className="this-should-work"><strong>Apps</strong></button>
        </Link>
      </div>

        </div>
        <div className="button-class">
          <button className="all-match-filters"><strong>ALL MATCH FILTERS</strong></button>
        </div>
      </>
      </Layout>
  )
}
