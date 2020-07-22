import React from "react"
import images from "../Confidentiality/images/sunrise.png"
import "./confidentiality.css"
import Layout from "../../components/shared/Layout/Layout"


function Confidentiality() {
  return (
    <Layout>
      <div className="#">

        {/* <!-- image header row --> */}
        <div className="row">
          <div className="col-12">
            <div className="header-image bg-danger">
              <img src="https://imgur.com/ZXhit1m.png" alt="sunrise" />
            </div>
          </div>
        </div>

        {/* <!-- confidentiality text row --> */}
        <div className="row">
          <div className="col-12">
            <div className="text-container">
              <h2 className="main-header">CONFIDENTIALITY</h2>
              <p className="main-text">Confidentiality is important to us <br />
              This is about being comfortable and making the first step<br />
              The first step can often be the hardest<br />
              We’re happy you’re here<br />
              We want to make sure you know that all of your information will stay confidential. <br />
              We follow all doctor and patient condfidentiality rules according to hipaa compliance </p>
            </div>
          </div>
        </div>

        {/* <!-- icon row --> */}
        <div className="row d-flex justify-content-center icon-set-container ">
          <div>
            <img className="image" src="https://i.imgur.com/FsBPaoy.png" alt="mha" />
          </div>
          <div>
            <img src="https://i.imgur.com/X7E4DrU.png" alt="hppa" />
          </div>
          <div>
            <img src="https://i.imgur.com/pS0YkKB.png" alt="hppa" />
          </div>
          <div>
            <img src="https://i.imgur.com/aKDlVVe.png" alt="hppa" />
          </div>
        </div>
      </div>
    </Layout>
  )

}

export default Confidentiality