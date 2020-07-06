import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrementCount = () => {
        if (this.state.count) {
            this.setState({
                count: this.state.count - 1
            }) 
        }
    }
    render() {
        return (
            <div>
                <p>paragraph test here !!!</p>
                <p>{ this.state.count }</p>
                <button onClick={ this.incrementCount }>Increase count</button>
                <button onClick={ this.decrementCount }>Decrease count</button>
            </div>
        );
    }
}

export default Counter;