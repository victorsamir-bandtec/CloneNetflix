import React, { useEffect, useState } from 'react';
import tmdb from '../../tmdb';
import MoveRow from '../../components/MoveRow';

const Home = () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {

    const loadAll = async () => {
      const list = await tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();

  }, []);


  return (
    <div className="page">

      <section className='lists'>

        {movieList.map((item, key) => (

          <MoveRow key={key} titulo={item.titulo} itens={item.itens} />

        ))}




      </section>







    </div>
  );
}

export default Home;