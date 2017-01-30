import React, { Component } from 'react';

export default class Task extends Component {
    render() {
        return (
            <h1>Hello -- {this.props.params.taskId}.</h1>
        );
    }
}

