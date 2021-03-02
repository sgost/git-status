import React, { Fragment } from "react"

import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Fragment>
      <SEO title="Home" description="Gatsby is a React-based open source framework with performance, scalability and security built-in." keywords={['gatsby', 'react']} />
      <div>Home</div>
    </Fragment>
  )
}

export default IndexPage
