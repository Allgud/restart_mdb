import React from "react"
import PropTypes from "prop-types"
import "./ratingStars.scss"
import {Rate} from "antd"

const RatingStars=({rateMovie, id, userRating})=>{
  const defaultOptions={
    count: 10,
    allowHalf: true,
    onChange: val=>rateMovie(val, id)
  } 
  const ratingOptions={
    count: 10,
    disable: true,
    defaultValue: userRating
  }
  return(
  <div className="card__rating">
    <Rate 
      {...userRating ? {...defaultOptions} : {...ratingOptions}}
    />
  </div>
  )}

RatingStars.propTypes={
  rateMovie: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  userRating: PropTypes.number
}

RatingStars.defaultProps={
  userRating: undefined
}

export default RatingStars