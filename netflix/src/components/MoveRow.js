import React from 'react';
import './MoveRow.css';

const MoveRow = ({ titulo, itens, le }) => {
  return (
    <div className="container">

      <h2>{titulo}</h2>

      <div className="movies">

        <div className="list">




          {
            itens.results.length > 0 && itens.results.map((item, key) => (

              <div className="content-movies" key={key}>

                <div className="img-movies">

                  <img className='capa' src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />

                  <img className='play' src="https://icon-library.com/images/play-icon-png-transparent/play-icon-png-transparent-4.jpg" />

                  <div className="sinopse">
                    <p>{item.overview}</p>
                  </div>

                </div>

              </div>
            ))
          }


        </div>

      </div>

    </div>
  );
}

export default MoveRow;