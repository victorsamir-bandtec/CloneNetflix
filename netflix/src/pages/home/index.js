import React, { useEffect, useState } from 'react';
import tmdb from '../../tmdb';
import MoveRow from '../../components/MoveRow';
import FeatureMovie from '../../components/FeatureMovie'

const Home = () => {

  const [movieList, setMovieList] = useState([]);

  const [featureData, setFeatureData] = useState(null);

  console.log(featureData);

  useEffect(() => {
    // pegando lista de filmes da api

    const loadAll = async () => {
      const list = await tmdb.getHomeList();
      setMovieList(list);

      // pegando Seriado Destaque aliatorio

      let originais = list.filter(i => i.genero === 'netflix');

      let randomSerie = Math.floor(Math.random() * (originais[0].itens.results.length - 1))

      let serie = originais[0].itens.results[randomSerie];

      let serieInfo = await tmdb.getMovieInfo(serie.id, 'tv');

      setFeatureData(serieInfo);

    }

    loadAll();

  }, []);


  return (
    <div className="page">

      <section className='destaque'>

        {featureData &&
          <FeatureMovie item={featureData} />
        }

      </section>

      <section className='lists'>

        {movieList.map((item, key) => (

          <MoveRow key={key} titulo={item.titulo} itens={item.itens} />

        ))}

      </section>

    </div>
  );
}

export default Home;