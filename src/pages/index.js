import * as React from "react"

import { usePostNewsTeaserQuery } from "../components/hooks/usePostNewsTeaserQuery"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import News from "../components/Homepage/News"
import Tutorials from "../components/Homepage/Tutorials"
import More from "../components/Homepage/More"

const IndexPage = () => {
  const news = usePostNewsTeaserQuery()

  return (

    <Layout>
      <News postData={news} />
      <Tutorials />
      <More />
    </Layout>

  )
}

export const Head = () => <Seo title="Home" />
export default IndexPage
