const React = require('react')
const PropTypes = require('prop-types')
const Carrier = require('./Carriers')
const Segments = require('./Segments')
const Data = require('../utils/Data')

function Cities (props) {
  return (
    <div className='column'>
      <h2 className='cities'>
        {props.cityOut.name} to {props.cityIn.name}
      </h2>
      {props.outboundCode === props.cityOut.code
                ? <Flights type='OutboundJourney' />
                : <Flights type='InboundJourney' />}
    </div>
  )
}

function Flights (props) {
  return (
    <ul className='flights'>
      {Data.getFlightOptions().filter((carrier) => { return carrier[props.type] !== undefined })
                .map((carrier, index) => {
                  return (
                    <li key={index} className='flight'>
                      <ul className='space-list-items'>
                        <Carrier carrierId={carrier.CarrierId} />
                        <Segments segments={carrier[props.type].Segments} indexKey={index} />
                      </ul>
                    </li>
                  )
                })}
    </ul>
  )
}

Flights.propTypes = {
  type: PropTypes.string.isRequired
}
Cities.propTypes = {
  cityOut: PropTypes.object.isRequired,
  cityIn: PropTypes.object.isRequired,
  outboundCode: PropTypes.string.isRequired
}

function FlySearch (props) {
  props = {
    outboundCode: 'BNE',
    departCity: { code: 'BNE', name: 'Brisbane' },
    arriveCity: { code: 'NAD', name: 'Nadi' }
  }
  return (
    <div className='columns'>
      <Cities
        cityOut={props.departCity}
        outboundCode={props.outboundCode}
        cityIn={props.arriveCity} />
      <Cities
        cityOut={props.arriveCity}
        outboundCode={props.outboundCode}
        cityIn={props.departCity} />
    </div >
  )
};

module.exports = FlySearch
