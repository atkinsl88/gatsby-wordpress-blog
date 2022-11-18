import * as React from "react"

import { usePostNewsTeaserQuery } from "../components/hooks/usePostNewsTeaserQuery"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import News from "../components/Homepage/News"

const IndexPage = () => {
  const news = usePostNewsTeaserQuery()

  return (

    <Layout>
      <News postData={news} />
    </Layout>

  )
}

export const Head = () => <Seo title="Home" />
export default IndexPage
