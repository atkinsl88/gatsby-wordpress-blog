import * as React from "react"

import { usePostTutorialsMainQuery } from "../components/hooks/Tutorials/usePostTutorialsMainQuery"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import TutorialsMain from "../components/Tutorials/TutorialsMain"

const TutorialsPage = () => {
  const tutorialsMain = usePostTutorialsMainQuery()

  return (
    <Layout>
      <TutorialsMain postData={tutorialsMain} />
    </Layout>
  )
  
  }

export const Head = () => <Seo title="Page two" />
export default TutorialsPage
