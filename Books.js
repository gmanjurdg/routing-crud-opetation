import React from 'react';
import './Books.css';
import Book from './Book';
import books from '../Data'

export default class Books extends React.Component {
  state={...books};
  getMovie = book => {
    return (
    <Book name={book.name} likes={book.likes} banner={book.banner} />
    )};


  render() {
    return (
      <div className='container'>
         {Object.keys(this.state).map(x => {
          return this.getMovie(this.state[x]);
        })}
      </div>
    );
  }
}

