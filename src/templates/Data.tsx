import React from 'react'
import { graphql, navigate } from 'gatsby'
import Calendar from 'react-calendar'

const addLeadingZero = (value: number) =>
  value < 10 ? `0${value}` : `${value}`
const dateString = (date: Date) =>
  `${date.getFullYear()}-${addLeadingZero(
    date.getMonth() + 1
  )}-${addLeadingZero(date.getDate())}`

export default ({ data }) => {
  const { sleep, activity } = data

  const date = new Date(activity.summary_date)

  return (
    <div>
      <Calendar
        minDate={new Date(2020, 4, 7)}
        maxDate={new Date()}
        defaultValue={date}
        onClickDay={value => navigate(`/${dateString(value)}`)}
      />
      <p>SLEEP SCORE: {sleep.score}</p>
      <p>ACTIVITY SCORE: {activity.score}</p>
    </div>
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
