import React from "react"
import PropTypes from "prop-types"
import "./content.scss"
import Card from "../Card"
import getUniqueKey from "../../Constats/functions/getUniqueKey"

const Content=({movies})=>{
  const movieList=movies.map((movie, index)=>{
    const {...children}=movie
    return(
      <Card 
        key={getUniqueKey(index)}
        {...children}
      />
    )
  })
  return(
    <div className="content">
      <div className="content__list">{movieList}</div>
    </div>
  )
}
    
Content.propTypes={
    movies: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Content