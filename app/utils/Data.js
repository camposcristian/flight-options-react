const carriers = require('json-loader!../data/carriers.json')
const flights = require('json-loader!../data/flight-options.json')

module.exports = {
  getFlightOptions: function () {
    return flights
  },

  getCarriers: function () {
    return carriers
  }
}
