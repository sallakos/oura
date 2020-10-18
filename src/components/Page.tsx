import React from 'react'
import { graphql, navigate, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Calendar from 'react-calendar'
import { createGlobalStyle } from 'styled-components'
import { dateUrl } from '../utils/utils'

import Asap from '../fonts/Asap-Regular.ttf'

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: Asap;
    src: url(${Asap}) format('truetype');
  }

  body {
    font-family: 'Asap', Arial, Helvetica, sans-serif;
  }
`

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
      <GlobalStyle />
      {children}
      <Calendar
        minDate={new Date(minDate)}
        maxDate={max}
        defaultValue={defaultDate}
        onClickDay={value => navigate(`/${dateUrl(value)}`)}
      />
    </div>
  )
}
