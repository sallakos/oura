const readinessData = require('../data/readiness.json')

exports.create = function (createNode, createContentDigest, createNodeId) {
  const values = {
    maxDate:
      readinessData.readiness[readinessData.readiness.length - 1].summary_date,
    minDate: readinessData.readiness[0].summary_date,
  }

  createNode({
    ...values,
    id: createNodeId(`values`),
    parent: null,
    children: [],
    internal: {
      type: 'values',
      content: JSON.stringify(values),
      contentDigest: createContentDigest(values),
    },
  })
}
