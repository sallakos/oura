const { fetchData } = require('./scripts/fetch-data.js')
const sleepData = require('./data/sleep.json')
const activityData = require('./data/activity.json')
const readinessData = require('./data/readiness.json')

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
}) => {
  const { createNode } = actions

  const create = (type, id, data) =>
    data[type].forEach(item =>
      createNode({
        ...item,
        date: item.summary_date,
        id: createNodeId(`${type}-${item[id]}`),
        parent: null,
        children: [],
        internal: {
          type,
          content: JSON.stringify(item),
          contentDigest: createContentDigest(item),
        },
      })
    )

  create('sleep', 'bedtime_start', sleepData)
  create('activity', 'day_start', activityData)
  create('readiness', 'summary_date', readinessData)

  return
}
exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allReadiness {
        nodes {
          summary_date
        }
      }
    }
  `)
  data.allReadiness.nodes.forEach(node => {
    const slug = `/${node.summary_date}`
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/Data.tsx`),
      context: { date: node.summary_date },
    })
  })
}
