import React from 'react';
import Book from './Book';
import movie from '../Data' 

export default class Movies extends React.Component {
  state={...movie};
  getMovie = movie => {
    return (
    <Book name={movie.name} likes={movie.likes} banner={movie.banner} />
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

