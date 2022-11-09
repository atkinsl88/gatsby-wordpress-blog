import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import HomepageFeatured from "../components/hp-featured"

const IndexPage = () => (

  <Layout>
    <HomepageFeatured />
  </Layout>

)

export const Head = () => <Seo title="Home" />
export default IndexPage
