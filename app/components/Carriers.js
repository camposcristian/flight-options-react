const React = require('react')
const Data = require('../utils/Data')

function Carriers (props) {
  return (
    <li>
      {Data.getCarriers().find((carrier) => { return carrier.Id === props.carrierId }).Name}
    </li>
  )
}

module.exports = Carriers
