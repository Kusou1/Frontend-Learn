import { graphql } from "gatsby"
import React from "react"

export default function Article({ data }) {
  console.log(data)
  return (
    <div>
      <p>{data.markdownRemark.frontmatter.title}</p>
      <p>{data.markdownRemark.frontmatter.date}</p>
      <p>{data.markdownRemark.frontmatter.author}</p>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
    </div>
  )
}

export const query = graphql`
  query ($slug: String) {
    markdownRemark(fields: { slug: { name: { eq: $slug } } }) {
      id
      html
      frontmatter {
        date
        author
        title
      }
    }
  }
`
