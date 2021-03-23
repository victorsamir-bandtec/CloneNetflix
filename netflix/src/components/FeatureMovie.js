import React from 'react';
import './FeatureMovie.css'

const FeatureMovie = ({ item }) => {


  let firstDate = new Date(item.first_air_date);






  return (

    <section className='featured' style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
    }}>

      <div className="featured-vertical">
        <div className="featured-horizontal">

          <h1>{item.original_name}</h1>

          <div className="info">

            <h3>{item.vote_average} pontos</h3>

            <h3>{firstDate.getFullYear()}</h3>

            <h3>
              {item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}
            </h3>


          </div>

          <div className="descripition">
            <p>{item.overview}..</p>
          </div>

          <div className="buttons">


          </div>

          <div className="genres">
            <strong>Genero:</strong>
          </div>

        </div>
      </div>


    </section>
  );
}

export default FeatureMovie;