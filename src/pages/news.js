import * as React from "react"

import { usePostNewsMainQuery } from "../components/hooks/News/usePostNewsMainQuery"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import NewsMain from "../components/News/NewsMain"

const NewsPage = () => {
  const newsMain = usePostNewsMainQuery()

  return (
    <Layout>
      <NewsMain postData={newsMain} />
    </Layout>
  )
  
  }

export const Head = () => <Seo title="Page two" />
export default NewsPage
