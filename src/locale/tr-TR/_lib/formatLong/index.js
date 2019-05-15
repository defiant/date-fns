import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index.js'

var dateFormats = {
  full: 'd MMMM y EEEE',
  long: 'd MMMM y',
  medium: 'd MMM y',
  short: 'd/M/Y'
}

var timeFormats = {
  full: 'H:mm:ss zzzz',
  long: 'H:mm:ss z',
  medium: 'H:mm:ss',
  short: 'H:mm'
}

var dateTimeFormats = {
  full: "{{date}} 'saat' {{time}}",
  long: "{{date}} 'saat' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
}

var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: 'full'
  }),

  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: 'full'
  }),

  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
}

export default formatLong
