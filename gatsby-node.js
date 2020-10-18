const readiness = require('./gatsby-node/readiness')
const sleep = require('./gatsby-node/sleep')
const activity = require('./gatsby-node/activity')
const values = require('./gatsby-node/values')

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
}) => {
  const { createNode } = actions

  readiness.create(createNode, createContentDigest, createNodeId)
  sleep.create(createNode, createContentDigest, createNodeId)
  activity.create(createNode, createContentDigest, createNodeId)
  values.create(createNode, createContentDigest, createNodeId)

  return
}

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allReadiness {
        nodes {
          date
        }
      }
    }
  `)
  const nodes = data.allReadiness.nodes

  nodes.forEach(node => {
    const slug = `/${node.date}`
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/DataPage.tsx`),
      context: { date: node.date },
    })
  })

  actions.createPage({
    path: `/`,
    component: require.resolve(`./src/templates/FrontPage.tsx`),
  })
}
