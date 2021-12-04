import React from "react"
import "./card.scss"

const Card=()=>(
  <div className="card">
    <img className="card__image" src="" alt="" />
    <div className="card__description">
      <div className="film__rating">
        <span>6.1</span>
      </div>
      <div className="description__content">
        <h5 className="description__title">Back</h5>
        <div className="released">
          <span className="released--date">
              {new Date(25/12/2021)}
          </span>
        </div>
        <div className="description__genre">
            action             
        </div>
        <div className="description__text">
          <p>Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div className="card__rating">
          stars                           
      </div>
    </div>
  </div>
)

export default Card