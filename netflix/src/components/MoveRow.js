import React from 'react';
import './MoveRow.css';

const MoveRow = ({ titulo, itens }) => {
  return (
    <div className="container">

      <h2>{titulo}</h2>

      <div className="movies">

        <div className="list">

          {
            itens.results.length > 0 && itens.results.map((item, key) => (

              <div className="content-movies" key={key}>

                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />


              </div>
            ))
          }


        </div>

      </div>

    </div>
  );
}

export default MoveRow;