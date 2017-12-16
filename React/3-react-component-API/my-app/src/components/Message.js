import React, { Component } from 'react';
import ActionButton from './ActionButton';
import PropTypes from 'proptypes';

class Message extends Component {

    //-------------------------------------------

    constructor(props) {
        super(props);
        console.log('Message :: constructor()');
        // this.state = {};
    }

    componentWillMount() {
        console.log('Message :: componentWillMount()');
    }

    render() {
        console.log('Message :: render()');
        return (
            <div className="alert alert-info">
                {this.props.message}  &mdash; <ActionButton />
                <hr />
                <button onClick={() => { this.forceUpdate() }}><span className="glyphicon glyphicon-refresh"></span></button>
            </div>
        );
    }

    componentDidMount() {
        console.log('Message :: componentDidMount()');
        //this.setState({message: 'hello'});
    }

    componentWillReceiveProps(nextProps) {
        console.log('Message :: componentWillReceiveProps()');
        // console.dir(nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Message :: shouldComponentUpdate()');
        if (this.props.message === nextProps.message) return false;
        return true;
    }

    componentWillUpdate() {
        console.log('Message :: componentWillUpdate()');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Message :: componentDidUpdate()');
    }

    componentWillUnmount() {
        console.log('Message :: componentWillUnmount()');
    }
}

Message.defaultProps = {
    message: 'greetings'
}

Message.propTypes = {
    message: PropTypes.string
}

Message.displayName = "Greet-Message";

export default Message;