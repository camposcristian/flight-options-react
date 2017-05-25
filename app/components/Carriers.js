var carriers = require('json-loader!../data/carriers.json');
var React = require('react');

function Carriers(props) {
    return (
        <li>
            {carriers.find((carrier) => { return carrier.Id === props.carrierId }).Name}
        </li>
    )
}

module.exports = Carriers;
