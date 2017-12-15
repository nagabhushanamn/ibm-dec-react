
import React, { Component } from 'react';

class HitButton extends Component {
    constructor(props) {
        super(props);
        console.log('HitButton :: constructor()');
        //console.dir(props);
        this.state = {
            count: 0
        }
    }

    handleBtnClick() {
        console.log('got hit, changing comp\'s state');
        this.setState({
            count: this.state.count + Number.parseInt(this.props.label)
        });
        this.props.onHit(this.props.label);
    }

    render() {
        console.log('HitButton :: render()');
        return (
            <div>
                <button onClick={this.handleBtnClick.bind(this)} className="btn btn-danger">
                    + {this.props.label} ---> {this.state.count}
                </button>
            </div>
        );
    }
}

export default HitButton;