const sleepData = require('../data/sleep.json')

exports.create = function (createNode, createContentDigest, createNodeId) {
  sleepData.sleep.forEach(item => {
    const data = {
      date: item.summary_date,
      periodId: item.period_id,
      isLongest: item.is_longest,
      bedtimeStart: item.bedtime_start,
      bedtimeEnd: item.bedtime_end,
      score: item.score,
      total: item.total,
      duration: item.duration,
      awake: item.awake,
      light: item.light,
      rem: item.rem,
      deep: item.deep,
      timeBeforeSleep: item.onset_latency,
      hrLow: item.hr_lowest,
      hrAverage: item.hr_average,
      temperatureDelta: item.temperature_delta,
    }

    createNode({
      ...data,
      id: createNodeId(`sleep-${item.summary_date}`),
      parent: null,
      children: [],
      internal: {
        type: 'sleep',
        content: JSON.stringify(item),
        contentDigest: createContentDigest(item),
      },
    })
  })
}
