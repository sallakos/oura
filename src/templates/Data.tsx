import React from 'react'
import { graphql } from 'gatsby'
import Page from '../components/Page'
import { dateString } from '../utils/utils'

export default ({ data, pageContext }) => {
  const { sleep, activity } = data

  const date = new Date(pageContext.date)

  return (
    <Page date={date}>
      <h1>{dateString(date)}</h1>
      <h2>Sleep</h2>
      <p>SLEEP SCORE: {sleep.score}</p>
      <p>Time in bed: {sleep.duration}</p>
      <p>Time awake: {sleep.awake}</p>
      <h2>Activity</h2>
      <p>ACTIVITY SCORE: {activity.score}</p>
      <p>Time not worn: {activity.nonWear}</p>
      <p>Rest time: {activity.rest}</p>
      <p>Inactive time: {activity.inactive}</p>
      <p>Low activity time: {activity.low}</p>
      <p>Medium activity time: {activity.medium}</p>
      <p>High activity time: {activity.high}</p>
    </Page>
  )
}

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
