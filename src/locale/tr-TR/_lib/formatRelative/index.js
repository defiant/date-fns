var formatRelativeLocale = {
  lastWeek: "'geçen' eeee 'saat' p",
  yesterday: "'dün' p",
  today: "'bugün' p",
  tomorrow: "'yarın' p",
  nextWeek: "eeee p",
  other: 'P'
}

export default function formatRelative (token, date, baseDate, options) {
  return formatRelativeLocale[token]
}
