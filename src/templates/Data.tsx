import React from 'react'
import { graphql } from 'gatsby'
import Page from '../components/Page'

export default ({ data, pageContext }) => {
  const { sleep, activity } = data
  const { minDate, maxDate } = pageContext

  const date = new Date(activity.summary_date)

  return (
    <Page minDate={minDate} maxDate={maxDate} date={date}>
      <h1>{date.toDateString()}</h1>
      <p>SLEEP SCORE: {sleep.score}</p>
      <p>ACTIVITY SCORE: {activity.score}</p>
    </Page>
  )
}

export const query = graphql`
  query data($date: Date) {
    sleep(summary_date: { eq: $date }) {
      score
      summary_date
    }
    activity(summary_date: { eq: $date }) {
      score
      summary_date
    }
  }
`
