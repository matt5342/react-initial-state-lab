// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    render() {
        // debugger
        return this.props.initialCount === 0 ? <div>Boom!</div> : (
            <div>{`${this.props.initialCount} seconds left before I go boom!`}</div>
        )
    }
}