import React, { Component } from 'react';

class TotalCountDisplay extends Component {
    constructor(props) {
        super(props);
        console.log('TotalCountDisplay :: constructor()');
    }
    render() {
        console.log('TotalCountDisplay :: render()');
        return (
            <div className="alert alert-info">
                <p> Total : <span className="badge">{this.props.count}</span> </p>
            </div>
        );
    }
}

export default TotalCountDisplay;