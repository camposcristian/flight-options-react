var React = require('react');
var FlySearch = require('./FlySearch');

class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <FlySearch/>
        </div>
        )
    }
}
module.exports = App;