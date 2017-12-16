import React, { Component } from 'react';
import PropTypes from 'proptypes';

class ActionButton extends Component {
    render() {
        let color = this.context.color
        return (
            <button style={{ backgroundColor: color }}>Action</button>
        );
    }
}

ActionButton.contextTypes = {
    color: PropTypes.string
};

export default ActionButton;