export const dateString = (date: Date) =>
  `${chooseWeekDay(date)} ${date.toLocaleDateString('fi', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  })}`

const chooseWeekDay = (date: Date) => {
  switch (date.getDay()) {
    case 0:
      return 'Maanantai'
    case 1:
      return 'Tiistai'
    case 2:
      return 'Keskiviikko'
    case 3:
      return 'Torstai'
    case 4:
      return 'Perjantai'
    case 5:
      return 'Lauantai'
    case 6:
      return 'Sunnuntai'
    default:
      ''
  }
}

const addLeadingZero = (value: number) =>
  value < 10 ? `0${value}` : `${value}`

export const dateUrl = (date: Date) =>
  `${date.getFullYear()}-${addLeadingZero(
    date.getMonth() + 1
  )}-${addLeadingZero(date.getDate())}`
