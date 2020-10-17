import React from 'react'
import Page from '../components/Page'

export default ({ pageContext }) => {
  const { minDate, maxDate } = pageContext

  const now = new Date()
  const max = new Date(maxDate)
  const date = now <= max ? now : max

  return (
    <Page minDate={minDate} maxDate={maxDate} date={date}>
      <h1>Welcome!</h1>
    </Page>
  )
}
