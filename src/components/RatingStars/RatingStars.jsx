import React from "react"
import PropTypes from "prop-types"
import "./ratingStars.scss"
import {Rate} from "antd"
import {rateChildren} from "../../Constats/constants"

const RatingStars=({rateMovie, id, userRating})=>{
  const children=rateChildren.filter(child=>
    userRating ? child.isRated : !child.isRated
  )
  return(
    <div className="card__rating">
    <Rate
      count={10}
      allowHalf={children.allowHalf}
      onChange={val=>rateMovie(val, id)}
      disabled={children.disabled}
      defaultValue={userRating}
    />
  </div>
  )
}

RatingStars.propTypes={
  userRating: PropTypes.number.isRequired,
  rateMovie: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
}

export default RatingStars