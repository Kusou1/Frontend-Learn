import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function Header() {
  // 在非页面组件需要用useStaticQuery手动的去查询数据
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          title
        }
      }
    }
  `)
  return <div>
      <p>{data.site.siteMetadata.title}</p>
      <p>{data.site.siteMetadata.author}</p>
  </div>
}
