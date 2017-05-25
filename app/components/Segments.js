var React = require('react');
var Durations = require('./Durations');

function Segments(props) {
    return (
        <li>
            {
                props.segments.length === 1
                    ? <OneSegment segment={props.segments[0]} />
                    : <TwoSegments segs={props.segments} />
            }
        </li>
    )
}

function TwoSegments(props) {
    var flatSegment = {
        DepartureDate: props.segs[0].DepartureDate,
        ArrivalDate: props.segs[1].ArrivalDate,
        Duration: props.segs[0].FlightDuration + props.segs[0].StopOverDuration + props.segs[1].FlightDuration
    }
    return (
        <ul>
            <Durations.DepartureArrivalDate arrival={flatSegment.ArrivalDate} departure={flatSegment.DepartureDate} />
            <li>
                <Durations.CustomDuration segs={props.segs} />
                <Durations.SimpleFlightDuration segment={props.segs[1]} />
            </li>

            <Durations.FlightDuration duration={flatSegment.Duration} />
        </ul>
    )
}
function OneSegment(props) {
    return (
        <ul >
            <Durations.DepartureArrivalDate arrival={props.segment.ArrivalDate} departure={props.segment.DepartureDate} />
            <li> {props.segment.OriginCode} <Durations.SimpleFlightDuration segment={props.segment} /></li>
            <Durations.FlightDuration duration={props.segment.FlightDuration} />
        </ul>
    )
}


module.exports = Segments;