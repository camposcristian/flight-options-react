const Moment = require('moment')

module.exports = {
  calculateDuration: function (time) {
    return Moment.duration(time, 'minutes').hours() + 'h' + ' ' +
            Moment.duration(time, 'minutes').minutes() + 'm'
  },

  formatDate: function (date) {
    return Moment(date).format('hh:mma')
  }
}
