import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'

var eraValues = {
  narrow: ['Ö', 'S'],
  abbreviated: ['MÖ', 'MS'],
  wide: ['Milattan Önce', 'Milattan Sonra']
}

var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1. çeyrek', '2. çeyrek', '3. çeyrek', '4. çeyrek']
}

// Note: in Turkish, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['O', 'Ş', 'M', 'N', 'M', 'H', 'T', 'A', 'E', 'E', 'K', 'A'],
  abbreviated: [
    'Oca',
    'Şub',
    'Mar',
    'Nis',
    'May',
    'Haz',
    'Tem',
    'Ağu',
    'Eyl',
    'Eki',
    'Kas',
    'Ara'
  ],
  wide: [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık'
  ]
}

var dayValues = {
  narrow: ['P', 'P', 'S', 'Ç', 'P', 'C', 'C'],
  short: ['Pz', 'Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct'],
  abbreviated: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
  wide: [
    'Pazar',
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi'
  ]
}

var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'g.',
    noon: 'ö.',
    morning: 'sabah',
    afternoon: 'ö.s.',
    evening: 'akşam',
    night: 'gece'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'gece yarısı',
    noon: 'öğlen',
    morning: 'morning',
    afternoon: 'öğleden sonra',
    evening: 'akşam',
    night: 'gece yarısı'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'gece yarısı',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'öğleden sonra',
    evening: 'akşam',
    night: 'gece yarısı'
  }
}
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'gy',
    noon: 'ö',
    morning: 'sabahında',
    afternoon: 'öğleninde',
    evening: 'akşamında',
    night: 'gecesinde'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'gece yarısı',
    noon: 'noon',
    morning: 'sabahında',
    afternoon: 'öğleninde',
    evening: 'akşamında',
    night: 'gecesinde'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'gece yarısı',
    noon: 'öğlen',
    morning: 'sabahında',
    afternoon: 'öğleninde',
    evening: 'akşamında',
    night: 'gecesinde'
  }
}

function ordinalNumber(dirtyNumber, dirtyOptions) {
  var number = Number(dirtyNumber)

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'
  //
  var options = dirtyOptions || {}
  var unit = String(options.unit)

  switch (unit) {
    case 'quarter':
    case 'month':
    case 'week':
    case 'minute':
    case 'second':
      return number + '.'
  }

  var rem100 = number % 100
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "'inci"
      case 2:
        return number + "'nci"
      case 3:
        return number + "'üncü"
      case 4:
        return number + "'üncü"
      case 5:
        return number + "'inci"
      case 6:
        return number + "'ncı"
      case 7:
        return number + "'nci"
      case 8:
        return number + "'inci"
      case 9:
        return number + "'uncu"
      case 10:
        return number + "'uncu"
      case 20:
        return number + "'nci"
      case 30:
        return number + "'uncu"
      case 40:
        return number + "'ıncı"
      case 50:
        return number + "'nci"
      case 60:
        return number + "'ıncı"
      case 70:
        return number + "'inci"
      case 80:
        return number + "'inci"
      case 90:
        return number + "'ıncı"
      case 100:
        return number + "'üncü"
    }
  }
  return number + '.'
}

var localize = {
  ordinalNumber: ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function(quarter) {
      return Number(quarter) - 1
    }
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide'
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
}

export default localize
