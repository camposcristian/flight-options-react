const Moment = require('moment')
const React = require('react')
const ReactTooltip = require('react-tooltip')
const Dates = require('../utils/Date')

module.exports = {

  DepartureArrivalDate: function (props) {
    return (
      <li>
        <span className='bold-span'> {Dates.formatDate(props.arrival)}</span>
        <span> to</span>
        <span className='bold-span'> {Dates.formatDate(props.departure)}</span>
        {Moment(props.departure).day() !== Moment(props.arrival).day()
                    ? <span className='dayAfter'> ({Moment(props.arrival).format('ddd, DD MMM')}) </span>
                    : null}
      </li>
    )
  },

  CustomDuration: function (props) {
    return (
      <span>
        {props.segs[0].OriginCode}
        <a data-tip data-for={'flightDuration' + props.segs[0].FlightNo}> → </a>
        <ReactTooltip id={'flightDuration' + props.segs[0].FlightNo} place='top' type='dark' effect='solid'>
          <span>✈ {Dates.calculateDuration(props.segs[0].FlightDuration)}</span>
        </ReactTooltip>
        <a data-tip data-for={'stopOverDuration' + props.segs[0].FlightNo}> {props.segs[0].DestinationCode} </a>
        <ReactTooltip id={'stopOverDuration' + props.segs[0].FlightNo} place='top' type='dark' effect='solid'>
          <span> {Dates.calculateDuration(props.segs[0].StopOverDuration)} stopover</span>
        </ReactTooltip>
      </span>
    )
  },

  FlightDuration: function (props) {
    return (
      <li className='bold-span'>
        {Dates.calculateDuration(props.duration)}
      </li>
    )
  },

  SimpleFlightDuration: function (props) {
    return (
      <span>
        <a data-tip data-for={'flightDuration' + props.segment.FlightNo}> → </a>
        <ReactTooltip id={'flightDuration' + props.segment.FlightNo} place='top' type='dark' effect='solid'>
          <span>✈ {Dates.calculateDuration(props.segment.FlightDuration)}</span>
        </ReactTooltip>
        {props.segment.DestinationCode}
      </span>
    )
  }
}
