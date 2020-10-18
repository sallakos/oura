const activityData = require('../data/activity.json')

exports.create = function (createNode, createContentDigest, createNodeId) {
  activityData.activity.forEach(item => {
    const data = {
      date: item.summary_date,
      dayStart: item.day_start,
      dayEnd: item.day_end,
      score: item.score,
      periodId: item.period_id,
      nonWear: item.non_wear,
      rest: item.rest,
      inactive: item.inactive,
      low: item.low,
      medium: item.medium,
      high: item.high,
      steps: item.steps,
      calTotal: item.cal_total,
    }

    createNode({
      ...data,
      id: createNodeId(`activity-${item.summary_date}`),
      parent: null,
      children: [],
      internal: {
        type: 'activity',
        content: JSON.stringify(item),
        contentDigest: createContentDigest(item),
      },
    })
  })
}
