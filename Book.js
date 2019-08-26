import * as React from 'react';
import './Book.css';

export default class Book extends React.Component {
  render() {
    return (
      <div className='movie-card'>
        <img src= {this.props.banner} />
        <label>
          {this.props.likes} {this.props.name} {this.props.banner}
        </label>
      </div>
    );
  }
}
