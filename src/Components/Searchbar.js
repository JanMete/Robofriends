import React from 'react';
import 'tachyons';

const Searchbar = ({ searchChange }) => {
  return (
    <div className='tc'>
      <input
        type='text'
        className='pa3 ba b--green bg-lightest-blue'
        placeholder='Search robots'
        onChange={searchChange}
      />
    </div>
  );
};

export default Searchbar;
