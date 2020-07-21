import React from "react"
//import App from "./App"
import "./Confidentiality.css"
import Layout from "../../components/shared/Layout/Layout"


function Confidentiality() {
  return (
    <Layout>
      <div className="conatainer">

        {/* <!-- image header row --> */}
        <div className="row">
          <div className="col-12">
            <div className="header-image bg-danger">

            </div>
          </div>
        </div>

        {/* <!-- confidentiality text row --> */}
        <div className="row">
          <div className="col-12">
            <div className="text-container bg-success pl-3 pt-3 my-5">
              <h2>COnfidentiality header</h2>
            </div>
          </div>
        </div>

        {/* <!-- icon row --> */}
        <div className="row box-4">
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

        


        <aside className="box box-2">LeftSide</aside>
        <main className="box box-3">Main Content</main>
        <aside className="box box-4 d-flex justify-content-around">
          <div className="box box-6">icon-1</div>
          <div className="box box-7">icon-2</div>
          <div className="box box-8">icon-3</div>
          <div className="box box-9">icon-4</div>
        </aside>
      </div>
    </Layout>
  )

}

export default Confidentiality