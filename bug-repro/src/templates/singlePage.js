import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"

const PageTemplate = ({ data: { page } }) => (
    <>
      <h1>{parse(page.title)}</h1>
      {parse(page.content)}
    </>
)


export default PageTemplate

export const pageQuery = graphql`
  query PageById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
    # selecting the current post by id
    page: wpPage(id: { eq: $id }) {
      id
      content
      title
    }
  }
`
