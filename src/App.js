import React, { Component } from 'react';
import List from './List'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lists: [
        {
          id: '1',
          header: 'First list',
          cardIds: ['a', 'b', 'e', 'f', 'g', 'j', 'l', 'm'],
        },
        {
          id: '2',
          header: 'Second list',
          cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
        },
        {
          id: '3',
          header: 'Third list',
          cardIds: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'],
        },
        {
          id: '4',
          header: 'Fourth list',
          cardIds: ['l', 'm'],
        },
      ],
      allCards: {
        'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
        'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
        'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
        'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
        'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
        'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
        'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
        'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
        'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
        'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
        'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
        'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
        'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
      },
    }
  }

  // handleDeleteClicked = (id) => {
  //   this.state.lists.map(list => {
  //      list.cardIds.map(//fetches cardId's
  //        cardId =>{
  //         if(cardId !== id){
  //         list.cardIds.unshift()
  //         }
  //         else {
  //             list.cardIds.push()
  //         }
  //           }) 
  //     // console.log(list);
  //   });
  //   delete this.state.allCards[id];
  //   this.setState({
  //     ...this.state
  //   })
  // }
  findById = (listId) => {
    let foundId = this.state.lists.find(list => listId === list.id);
    return foundId;
  }


  // handleAddClicked = (listId) => {

  //       //Add return to allCards
  //       let newCards = {
  //         id,
  //         title: `Random Card ${id}`,
  //         content: 'lorem ipsum',
  //       }
  //       let newAllCards = {...this.state.allCards, [newCards.id]: newCards};
  //       /******************************************************************************/
  //       let foundList = this.findById(listId);
  //       let newList = this.state.lists;
  //       let newIndex = newList.indexOf(foundList);
  //       foundList.cardIds.push(id);
  //       newList[newIndex] = foundList;

  //       this.setState({
  //         allcards: newAllCards,
  //         lists: newList
  //       })
  // }

  handleAddClicked = (listId) => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);

    const newCard = {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }

    const newList = this.state.lists.map(list => {
      if(list.id === listId){
        return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        }
      }
      return list;
    });

    this.setState({
      lists: newList,
      allCards: {
        ...this.state.allCards, 
        [newCard.id]: newCard
      }
    });
  }
  handleDeleteClicked = (id) => {
    let filterFunc = (list) => list.cardIds.filter(cardId => cardId !== id)
    let newIds = this.state.lists.map(list => {
      return {
        ...list,
        cardIds: filterFunc(list)
      }
    });
    let newCards = Object.entries(this.state.allCards).reduce((newAllCards, [key, value]) =>
      key === id ? newAllCards : { ...newAllCards, [key]: value }, {})
    this.setState({
      lists: newIds,
      allCards: newCards,
    })
  }

  render() {
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.lists.map(list => (
            <List
              key={list.id}
              uniqueId={list.id}
              handleAddClicked={this.handleAddClicked}
              deleteHandler={this.handleDeleteClicked}
              header={list.header}
              cards={list.cardIds.map(id => this.state.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
