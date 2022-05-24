import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default function Product({ data }) {
  console.log(data)
  return data.allProductJson.nodes.map(node => (
    <div key={node.title}>
      <p>{node.title}</p>
      <p>{node.price}</p>
      <div style={{ width: 400 }}>
        <Img fixed={node.url.childImageSharp.fixed} />
      </div>
    </div>
  ))
}

// export const query = graphql`
//   query {
//     allProductJson {
//       nodes {
//         price
//         title
//         url {
//           childImageSharp {
//             fluid {
//               aspectRatio
//               sizes
//               src
//               srcSet
//             }
//           }
//         }
//       }
//     }
//   }
// `

export const query = graphql`
  query {
    allProductJson {
      nodes {
        price
        title
        url {
          childImageSharp {
            fixed(width: 200, height: 200) {
              height
              width
              src
              srcSet
            }
          }
        }
      }
    }
  }
`
