import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"

const BlogPostTemplate = ({ data: { post } }) => (
  <>
    <h1>{parse(post.title)}</h1>
    {parse(post.content)}
  </>
)

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
    # selecting the current post by id
    post: wpPost(id: { eq: $id }) {
      id
      content
      title
    }
  }
`
