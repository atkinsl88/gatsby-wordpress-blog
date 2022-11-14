import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import Hero from "../components/Homepage/Hero"
import News from "../components/Homepage/News"
import Tutorials from "../components/Homepage/Tutorials"
import More from "../components/Homepage/More"

const IndexPage = () => (

  <Layout>
    <Hero />
    <News />
    <Tutorials />
    <More />
  </Layout>

)

export const Head = () => <Seo title="Home" />
export default IndexPage
