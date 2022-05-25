import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/SEO"

export default function Home({ data }) {
  console.log(data)
  return (
    <div>
      <Link to="/list">list</Link>
      <SEO title="index page"/>
      <p>{data.site.siteMetadata.title}</p>
      <p>{data.site.siteMetadata.author}</p>
    </div>
  )
}

// 在页面组件通过graphql去查询数据
export const query = graphql`
  query MyQuery {
    site {
      siteMetadata {
        author
        title
      }
    }
  }
`
