import * as React from "react"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"

import { usePostNewsFeaturedQuery } from "../components/hooks/Homepage/usePostNewsFeaturedQuery"
import { usePostNewsUpperQuery } from "../components/hooks/Homepage/usePostNewsUpperQuery"
import { usePostNewsLowerQuery } from "../components/hooks/Homepage/usePostNewsLowerQuery"
import { usePostTutorialsUpperQuery } from "../components/hooks/Homepage/usePostTutorialsUpperQuery"
import { usePostTutorialsLowerQuery } from "../components/hooks/Homepage/usePostTutorialsLowerQuery"
import { usePostNewsMoreQuery } from "../components/hooks/Homepage/usePostNewsMoreQuery"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import Intro from "../components/Homepage/Intro"
import NewsFeatured from "../components/Homepage/News/NewsFeatured"
import NewsUpper from "../components/Homepage/News/NewsUpper"
import NewsLower from "../components/Homepage/News/NewsLower"
import TutorialsUpper from "../components/Homepage/Tutorials/TutorialsUpper"
import TutorialsLower from "../components/Homepage/Tutorials/TutorialsLower"
import NewsMore from "../components/Homepage/News/NewsMore"

const IndexPage = () => {
  const newsFeatured = usePostNewsFeaturedQuery()
  const newsUpper = usePostNewsUpperQuery()
  const newsLower = usePostNewsLowerQuery()
  const tutorialsUpper = usePostTutorialsUpperQuery()
  const tutorialsLower = usePostTutorialsLowerQuery()
  const newsMore = usePostNewsMoreQuery()

  return (
    <Layout>
      <Helmet>
        <script src={withPrefix('script.js')} type="text/javascript" />
      </Helmet>
      <Intro />
      <NewsFeatured postData={newsFeatured} />
      <NewsUpper postData={newsUpper} />
      <NewsLower postData={newsLower} />
      <TutorialsUpper postData={tutorialsUpper} />
      <TutorialsLower postData={tutorialsLower} />
      <NewsMore postData={newsMore} />
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />
export default IndexPage