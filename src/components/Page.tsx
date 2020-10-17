import React from 'react'
import { navigate } from 'gatsby'
import Calendar from 'react-calendar'

const addLeadingZero = (value: number) =>
  value < 10 ? `0${value}` : `${value}`
const dateString = (date: Date) =>
  `${date.getFullYear()}-${addLeadingZero(
    date.getMonth() + 1
  )}-${addLeadingZero(date.getDate())}`

export default ({ minDate, maxDate, date, children }) => {
  return (
    <div>
      {children}
      <Calendar
        minDate={new Date(minDate)}
        maxDate={new Date(maxDate)}
        defaultValue={date}
        onClickDay={value => navigate(`/${dateString(value)}`)}
      />
    </div>
  )
}
