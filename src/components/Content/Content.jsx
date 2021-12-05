import React from "react"
import PropTypes from "prop-types"
import "./content.scss"
import Card from "../Card"

const Content=({movies})=>{
  const movieList=movies.map(movie=>{
    const {id, ...children}=movie
    return(
      <Card 
        key={id}
        {...children}
      />
    )
    }
  )
  return(
    <div className="content">
      <div className="content__list">{movieList}</div>
      <div className="content__pagination" />
    </div>
  )
}
    
Content.propTypes={
    movies: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Content