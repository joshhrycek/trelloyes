import React, { Component } from 'react';
import Card from './Card';
import './List.css';

export default class List extends Component {
    render () {
        return (
            <div>
            <h1>Hello List</h1>
            <Card/>
            </div>
        )
    }
}