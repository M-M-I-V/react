import React from 'react';

class Greeting extends React.Component {
    render() {
        return (
            <div>
                <h1 class name="text-2xl font-bold">Welcome, {this.props.name}!</h1>
            </div>
        )
    }
}

export default Greeting