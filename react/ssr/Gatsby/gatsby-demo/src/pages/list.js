import React from "react"
import Header from "../components/header"
import { graphql } from "gatsby"

export default function List({ data }) {
  console.log(data)
  return (
    <div>
      {data.allMarkdownRemark.nodes.map(post => (
        <div key={post.id}>
            <p>{post.frontmatter.title}</p>
            <p>{post.frontmatter.author}</p>
            <p>{post.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{__html:post.html}}></div> 
        </div>
      ))}
      {/* <Header /> */}
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        html
        id
        frontmatter {
          author
          title
          date
        }
        fileAbsolutePath
        internal {
          type
        }
      }
    }
  }
`
