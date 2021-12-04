import React from "react"
import PropTypes from "prop-types"
import "./content.scss"
import Card from "../Card"

const Content= props =>{
  const {arr}=props
  const movies=arr.map(el => {
      const {id, children} = el
      return(
          <Card 
            key={id}
            {...children}
          />
      )
  })
  return(
    <div className="content">
      <div className="content__list">{movies}</div>
      <div className="content__pagination" />
    </div>
  )
}
    
Content.propTypes={
    arr: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Content