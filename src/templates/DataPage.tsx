import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Page } from '../components/Page'
import { dateString } from '../utils/utils'
import { Chart } from '../components/Chart'

interface Props {
  data: {
    sleep: SleepData
    activity: ActivityData
  }
  pageContext: {
    date: Date
  }
}

interface SleepData {
  score: number
  duration: number
  awake: number
}

interface ActivityData {
  score: number
  nonWear: number
  rest: number
  inactive: number
  low: number
  medium: number
  high: number
}

export default ({ data, pageContext }: Props) => {
  const { sleep, activity } = data

  const date = new Date(pageContext.date)

  return (
    <Page date={date}>
      <h1>{dateString(date)}</h1>
      <ChartContainer>
        <Chart sleep={sleep} activity={activity} />
      </ChartContainer>
      <h2>Sleep</h2>
      <p>SLEEP SCORE: {sleep.score}</p>
      <h2>Activity</h2>
      <p>ACTIVITY SCORE: {activity.score}</p>
    </Page>
  )
}

const ChartContainer = styled.div`
  width: 500px;
  max-width: 100%;
`

export const query = graphql`
  query data($date: Date) {
    sleep(date: { eq: $date }) {
      score
      duration
      awake
    }
    activity(date: { eq: $date }) {
      score
      nonWear
      rest
      inactive
      low
      medium
      high
    }
  }
`
