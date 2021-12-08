import React from "react"
import PropTypes from "prop-types"
import "./genres.scss"
import getRandomKey from "../../Constats/functions/getRandomKey"

const Genres=({genres, genreIds})=>{
  const genresList = genres
    .map(el => genreIds.includes(el.id) && el.name )
    .filter(str => str !== false)
    .map((filmGenre, index) => (
      <li key={getRandomKey(index)}>
        <span>{filmGenre}</span>
      </li>
    ))
  return(
    <div className="description__genre">
      <ul>
        {genresList}  
      </ul>            
    </div>
  )
}

Genres.propTypes={
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  genreIds: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default Genres