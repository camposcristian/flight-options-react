var Moment = require('moment');
var React = require('react');
var ReactTooltip = require('react-tooltip');

module.exports = {

    DepartureArrivalDate: function (props) {
        return (
            <li>
                <span className="bold-span"> {formatDate(props.arrival)}</span>
                <span> to</span>
                <span className="bold-span"> {formatDate(props.departure)}</span>
                {Moment(props.departure).day() !== Moment(props.arrival).day()
                    ? <span className="dayAfter"> ({Moment(props.arrival).format("ddd, DD MMM")}) </span>
                    : null}
            </li>
        )
    },

    CustomDuration: function (props) {
        return (
            <span>
                {props.segs[0].OriginCode}
                <a data-tip data-for={"flightDuration" + props.segs[0].FlightNo}> → </a>
                <ReactTooltip id={'flightDuration' + props.segs[0].FlightNo} place="top" type="dark" effect="solid">
                    <span>✈ {calculateDuration(props.segs[0].FlightDuration)}</span>
                </ReactTooltip>
                <a data-tip data-for={'stopOverDuration' + props.segs[0].FlightNo}> {props.segs[0].DestinationCode} </a>
                <ReactTooltip id={'stopOverDuration' + props.segs[0].FlightNo} place="top" type="dark" effect="solid">
                    <span> {calculateDuration(props.segs[0].StopOverDuration)} stopover</span>
                </ReactTooltip>
            </span>
        )
    },

    FlightDuration: function (props) {
        return (
            <li className="bold-span">
                {calculateDuration(props.duration)}
            </li>
        )
    },

    SimpleFlightDuration: function (props) {
        return (
            <span>
                <a data-tip data-for={'flightDuration' + props.segment.FlightNo}> → </a>
                <ReactTooltip id={'flightDuration' + props.segment.FlightNo} place="top" type="dark" effect="solid">
                    <span>✈ {calculateDuration(props.segment.FlightDuration)}</span>
                </ReactTooltip>
                {props.segment.DestinationCode}
            </span>
        )
    }
}

window.calculateDuration = function (time) {
    return Moment.duration(time, "minutes").hours() + 'h' + ' ' +
        Moment.duration(time, "minutes").minutes() + 'm';
}

window.formatDate = function (date) {
    return Moment(date).format("hh:mma")
}

