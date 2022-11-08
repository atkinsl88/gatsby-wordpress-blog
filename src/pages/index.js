import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../css/styles.css"
import "bootstrap/dist/css/bootstrap.min.css";

const IndexPage = () => (
  <Layout
    className={styles}
  >

    <div
      className="container"
    >
      <h1>
        News
      </h1>
      <h2>
        8 November 2022
      </h2>
    </div>

    <div
      className="container"
      style={{
        padding: `2rem 0`,
      }}
    >
      <div>
        <h3>News</h3>
      </div>
      <div
        style={{
          display: `flex`,
          justifyContent: `flex-end`,
        }}
      >
        <p>Read more news</p>
      </div>
    </div>

    <div
      className="container-fluid"
      style={{
        padding: `2rem 0`,
        background: `#2D2D2E`
      }}
    >
      <div className="container">
        <div>
          <h3>Tutorials</h3>
        </div>
        <div 
          style={{
            display: `flex`,
            justifyContent: `flex-end`,
          }}
        >
          <p>Read more Tutorials</p>
        </div>
      </div>
    </div>

    <div
      className="container"
      style={{
        padding: `2rem 0`,
      }}
      
    >
      <div>
        <h3>More</h3>
      </div>
    </div>

  </Layout>
)

export const Head = () => <Seo title="Home" />
export default IndexPage
