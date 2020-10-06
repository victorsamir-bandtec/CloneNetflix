import React, { useEffect } from 'react';
import tmdb from './tmdb';

function App() {

  useEffect(() => {

    const loadAll = async () => {
      const list = await tmdb.getHomeList();
      console.log(list);
    }

    loadAll();

  }, []);

  return (
    <h1>samir</h1>
  );
}

export default App;
