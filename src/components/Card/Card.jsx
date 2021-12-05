import React from "react"
import {format} from "date-fns"
import "./card.scss"
import {IMAGE_API, fakePoster} from "../../Constats/constants"
import overviewCutter from "../../Constats/functions"


const Card=({...children})=>{
  const {
    title, 
    overview, 
    vote_average: voteAverage, 
    release_date: releaseDate, 
    poster_path: posterPath}=children
  return(  
    <div className="card">
      <img 
        className="card__image" 
        src={!posterPath ? fakePoster : IMAGE_API + posterPath} 
        alt={title}/>
      <div className="card__description">
        <div className="film__rating">
          <span>{voteAverage.toFixed(1)}</span>
        </div>
        <div className="description__content">
          <h5 className="description__title">{title}</h5>
          <div className="released">
            <span className="released--date">
              {releaseDate ? format(new Date(releaseDate), `MMMM dd, y`) : '...'}
            </span>
          </div>
          <div className="description__genre">
            action             
          </div>
          <div className="description__text">
            <p>{overviewCutter(overview)}</p>
          </div>
        </div>
        <div className="card__rating">
          stars                           
        </div>
      </div>
    </div>  
  ) 
}

export default Card