import React, { Component } from 'react'

export default class Incre extends Component {

    state = {
        count: 10,
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 10
        })
    }

    increment = () => {
        this.setState({
            count: this.state.count + 10
        })
    }


    render() {
        console.log(this.state.count);

        return (
            <div>
                <h4>{this.state.count}</h4>
                <button onClick={this.decrement}>decrement</button>
                <button onClick={this.increment}>increment</button>
            </div>
        )
    }
}

