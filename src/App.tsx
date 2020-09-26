import React, { useCallback, useState } from 'react';
import './App.css';
import Launch from './components/Launch'
import LaunchDetails from './components/LaunchDetails'

const App = () => {
  const [id, setId] = useState(42);
  const handleIdChange = useCallback(newId => {
    setId(newId);
  }, []);

  return (
    <div className="App">
      <Launch handleIdChange={handleIdChange} />
      <LaunchDetails id={id} />
    </div>
  );
};

export default App;
