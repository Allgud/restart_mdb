import React from "react"
import {format} from "date-fns"
import RatingStars from "../RatingStars"
import Genres from "../Genres"
import {GenresConsumer, RatingConsumer} from "../../context"
import "./card.scss"
import {IMAGE_API, fakePoster} from "../../Constats/constants"
import overviewCutter from "../../Constats/functions/overviewCutter"
import ratingColor from "../../Constats/functions/ratingColor"

const Card=({...children})=>{
  const {
    id,
    title, 
    overview, 
    vote_average: voteAverage, 
    release_date: releaseDate, 
    poster_path: posterPath,
    genre_ids: genreIds,
    rating: userRating
  }=children
  return(  
    <div className="card">
      <img 
        className="card__image" 
        src={!posterPath ? fakePoster : IMAGE_API + posterPath} 
        alt={title}/>
      <div className="card__description">
        <div className={ratingColor(voteAverage)}>
          <span>{voteAverage.toFixed(1)}</span>
        </div>
        <div className="description__content">
          <h5 className="description__title">{title}</h5>
          <div className="released">
            <span className="released--date">
              {releaseDate && format(new Date(releaseDate), `MMMM dd, y`)}
            </span>
          </div>
          <GenresConsumer>
            {genres => 
              <Genres 
                genres={genres}
                genreIds={genreIds}   
              />
            }
          </GenresConsumer>
          <div className="description__text">
            <p>{overviewCutter(overview)}</p>
          </div>
        </div>
        <RatingConsumer>
          {rateMovie=>(
            <RatingStars 
              rateMovie={rateMovie}
              id={id}
              userRating={userRating!==undefined ? userRating : 0}
            />
          )}
        </RatingConsumer>                         
      </div>
    </div>  
  ) 
}

export default Card