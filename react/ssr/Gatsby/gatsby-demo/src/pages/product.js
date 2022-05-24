import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default function Product({ data }) {
  console.log(data)
  return data.allProductJson.nodes.map(node => (
    <div>
      <p>{node.title}</p>
      <p>{node.price}</p>
      <div>
        <Img fluid={node.url.childImageSharp.fluid} />
      </div>
    </div>
  ))
}

export const query = graphql`
  query {
    allProductJson {
      nodes {
        price
        title
        url {
          childImageSharp {
            fluid {
              aspectRatio
              sizes
              src
              srcSet
            }
          }
        }
      }
    }
  }
`
