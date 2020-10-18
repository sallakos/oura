const readinessData = require('../data/readiness.json')

exports.create = function (createNode, createContentDigest, createNodeId) {
  readinessData.readiness.forEach(item => {
    const data = {
      date: item.summary_date,
      periodId: item.period_id,
      score: item.score,
      scoreSleepBalance: item.score_sleep_balance,
      scoreActivityBalance: item.score_activity_balance,
      scoreRestingHr: item.score_resting_hr,
      scoreRecoveryIndex: item.score_recovery_index,
      scoreTemperature: item.score_temperature,
    }

    createNode({
      ...data,
      id: createNodeId(`readiness-${item.summary_date}`),
      parent: null,
      children: [],
      internal: {
        type: 'readiness',
        content: JSON.stringify(item),
        contentDigest: createContentDigest(item),
      },
    })
  })
}
