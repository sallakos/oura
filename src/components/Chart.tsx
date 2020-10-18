import React from 'react'
import { VictoryPie } from 'victory'

interface Data {
  sleep: SleepData
  activity: ActivityData
}

interface SleepData {
  duration: number
  awake: number
}

interface ActivityData {
  nonWear: number
  rest: number
  inactive: number
  low: number
  medium: number
  high: number
}

export const Chart = ({ sleep, activity }: Data) => {
  return (
    <VictoryPie
      innerRadius={100}
      labelRadius={({ innerRadius }) =>
        typeof innerRadius === 'number' ? innerRadius + 5 : 0
      }
      colorScale={[
        'blue',
        'navy',
        'black',
        'grey',
        'red',
        'orange',
        'yellow',
        'green',
      ]}
      data={[
        { x: 'Time in bed', y: sleep.duration / 60 },
        { x: 'Time awake', y: sleep.awake / 60 },
        { x: 'Time not worn', y: activity.nonWear },
        { x: 'Rest time', y: activity.rest },
        { x: 'Inactive time', y: activity.inactive },
        { x: 'Low activity time', y: activity.low },
        { x: 'Medium activity time', y: activity.medium },
        { x: 'High activity time', y: activity.high },
      ]}
    />
  )
}
