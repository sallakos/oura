import React from 'react'
import { graphql, navigate, useStaticQuery } from 'gatsby'
import Calendar from 'react-calendar'

const addLeadingZero = (value: number) =>
  value < 10 ? `0${value}` : `${value}`
const dateString = (date: Date) =>
  `${date.getFullYear()}-${addLeadingZero(
    date.getMonth() + 1
  )}-${addLeadingZero(date.getDate())}`

export default ({ date, children }) => {
  const query = graphql`
    query {
      values {
        minDate
        maxDate
      }
    }
  `
  const data = useStaticQuery(query)
  const { minDate, maxDate } = data.values

  const max = new Date(maxDate)
  const defaultDate = date > max ? max : date

  return (
    <div>
      {children}
      <Calendar
        minDate={new Date(minDate)}
        maxDate={max}
        defaultValue={defaultDate}
        onClickDay={value => navigate(`/${dateString(value)}`)}
      />
    </div>
  )
}
