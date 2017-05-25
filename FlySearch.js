var React = require('react');
var PropTypes = require('prop-types')
var flights = require('json-loader!../data/flight-options.json');
var Carrier = require('./Carriers');
var Segments = require('./Segments');


function Cities(props) {
    return (
        <div className="column">
            <h2 className='cities'>
                {props.cityOut.name} to {props.cityIn.name}
            </h2>
            {props.outboundCode === props.cityOut.code
                ? <Flights type="OutboundJourney" />
                : <Flights type="InboundJourney" />}
        </div>
    )
}

function Flights(props) {
    return (
        <ul className='flights'>
            {flights.filter((carrier) => { return carrier[props.type] !== undefined })
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

// Flights.propTypes = {
//     repos: PropTypes.array.isRequired,

// }

// SelectLanguage.propTypes = {
//     selectedLanguage: PropTypes.string.isRequired,
//     onSelect: PropTypes.func.isRequired
// }


class FlySearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            outboundCode: 'BNE',
            departCity: { code: "BNE", name: "Brisbane" },
            arriveCity: { code: "NAD", name: "Nadi" },
            selectedLanguage: 'All',
            repos: null
        };
    };

    render() {
        return (
            <div className="columns">
                <Cities
                    cityOut={this.state.departCity}
                    outboundCode={this.state.outboundCode}
                    cityIn={this.state.arriveCity} />
                <Cities
                    cityOut={this.state.arriveCity}
                    outboundCode={this.state.outboundCode}
                    cityIn={this.state.departCity} />
            </div >
        )
    }
}

module.exports = FlySearch;