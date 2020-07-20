import React, { useState, useEffect } from 'react';
import Signin from "../../components/shared/SignIn/Signin"
import CreateAcc from "../../components/CreateAcc/CreateAcc"
import { withRouter } from 'react-router-dom';
import Layout from "../../components/shared/Layout/Layout"
import './UserCreate.css'


function UserCreate() {


  return (
    <>
      <Layout>
        <img className="nav-img" src="https://i.imgur.com/NbDJy5H.jpg" />
        <div className="outer-ctn">
          <CreateAcc />
          <Signin />
        </div>
      </Layout>
    </>

  )
}

export default withRouter(UserCreate)
