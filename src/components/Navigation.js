import React, { Component } from 'react';
import {Link} from 'react-router';
export default class Navigation extends Component {
    render() {
        return (
            <div>
                <Link to="/blog">Blog </Link>{'     '}
                <Link to="/off">Off Documentation </Link>{'     '}
                <Link to="/tasks/task/5">Tasks</Link>{'     '}

                <br/>
                {this.props.children}
            </div>
        );
    }
}

