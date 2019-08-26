import React from 'react';
import Book from './Book';
import mobile from '../Data';

export default class Mobiles extends React.Component {
    state= {...mobile};
    getMobile = mobile => {
    return( <Book name={mobile.name} likes={mobile.likes} banner={mobile.banner} />
  );
  };

  render() {
    return (
      <div className='container'>
        {Object.keys(this.state).map(x => {
          return this.getMobile(this.state[x]);
        })}
      </div>
    );
  }
}

