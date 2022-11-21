import * as React from "react"

import { usePostNewsTeaserQuery } from "../components/hooks/usePostNewsTeaserQuery"
import { usePostTutorialsTeaserQuery } from "../components/hooks/usePostTutorialsTeaserQuery"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import News from "../components/Homepage/News"
import Tutorials from "../components/Homepage/Tutorials"

const IndexPage = () => {
  const news = usePostNewsTeaserQuery()
  const tutorials = usePostTutorialsTeaserQuery()

  console.log(tutorials)

  return (
    <Layout>
      <News postData={news} />
      <Tutorials postData={tutorials} />
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />
export default IndexPage
