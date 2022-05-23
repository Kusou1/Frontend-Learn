const { parseString } = require("xml2js")
const { promisify } = require("util")
const parse = promisify(parseString)
const createNodeHelpers = require("gatsby-node-helpers").default

async function onCreateNode({ node, loadNodeContent, actions }) {
  const { createNode } = actions
  if (node.internal.mediaType === "application/xml") {
    const xml = await loadNodeContent(node)
    const obj = await parse(xml, {
      explicitArray: false,
      explicitRoot: false,
    })
    const { createNodeFactory } = createNodeHelpers({
      typePrefix: "XML",
    })
    const createNodeObject = createNodeFactory("parsedContent")
    createNode(createNodeObject(obj))
  }
}

module.exports = {
  onCreateNode,
}
