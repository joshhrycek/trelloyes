import React, { Component } from 'react';
import Card from './Card';
import './List.css';

export default class List extends Component {
    render() {
        return (
            <div className="List">
                <header className="List-header">
                    {this.props.header}
                </header>
                    <div className="List-cards">
                        {this.props.cards.map(card =>
                            <Card
                            title={card.title}
                            content={card.content}
                            key={card.id}
                        />    
                        )}
                    </div>
            </div>
        )
    }
}