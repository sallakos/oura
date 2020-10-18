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
      <p>SLEEP SCORE: {sleep.score}</p>
      <p>ACTIVITY SCORE: {activity.score}</p>
    </Page>
  )
}

export const query = graphql`
  query data($date: Date) {
    sleep(date: { eq: $date }) {
      score
      date
    }
    activity(date: { eq: $date }) {
      score
      date
    }
  }
`
