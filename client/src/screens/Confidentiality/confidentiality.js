import React from "react"
import images from "../Confidentiality/images/sunrise.png"
import "./Confidentiality.css"
import Layout from "../../components/shared/Layout/Layout"


function Confidentiality() {
  return (
    <Layout>
      <div className="#">

        {/* <!-- image header row --> */}
        <div className="row">
          <div className="col-12">
            <div className="header-image bg-danger">
              <img src={images} alt="sunrise" />
            </div>
          </div>
        </div>

        {/* <!-- confidentiality text row --> */}
        <div className="row">
          <div className="col-12">
            <div className="text-container bg-success pl-0 pt-0 my-0">
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
        <div className="row box-4 d-flex justify-content-around">
          <div className="col-12 col-lg-3">
            <div className="box box-6">icon-1</div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="box box-7">icon-2</div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="box box-8">icon-3</div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="box box-9">icon-4</div>
          </div>
        </div>

        


        {/* <aside className="box box-2">LeftSide</aside>
        <main className="box box-3">Main Content</main>
        <aside className="box box-4 d-flex justify-content-around">
          <div className="box box-6">icon-1</div>
          <div className="box box-7">icon-2</div>
          <div className="box box-8">icon-3</div>
          <div className="box box-9">icon-4</div>
        </aside> */}
      </div>
    </Layout>
  )

}

export default Confidentiality