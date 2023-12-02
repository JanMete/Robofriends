import React, { useState, useEffect } from 'react';
import CardList from '../Components/CardList';
import Searchbar from '../Components/Searchbar';
import ErrorBoundary from '../Components/ErrorBoundary';

import './App.css';

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  return !robots.length ? (
    <h1>LOADING</h1>
  ) : (
    <div>
      <h1 className='f1 tc'>Robofriends</h1>
      <Searchbar searchChange={onSearchChange} />;
      <ErrorBoundary>
        <CardList robots={filteredRobots} />;
      </ErrorBoundary>
    </div>
  );
}

export default App;
