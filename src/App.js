import React, { Component } from 'react';
import List from './List';
import './App.css';

class App extends Component {


  render() {
    const { store } = this.props
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          <List/>
          {/* {store.lists.map(list =>
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds}
            />)} */}
        </div>
      </main>
    );
  }
}

export default App;