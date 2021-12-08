import React from "react"
import PropTypes from "prop-types"
import "./tab.scss"
import classNames from "../../Constats/functions/classNames"

const Tab=({name, activeTab, setActiveTab})=>(
  <li className={classNames(name, activeTab)}>
    <label htmlFor={`${name}--tab`}>
      <input 
        id={`${name}--tab`} 
        type="radio" 
        name="tabs" 
        value={name}
        onClick={evt => setActiveTab(evt.target.value)}
      />{name[0].toUpperCase() + name.slice(1)}
    </label>
  </li>
)

Tab.propTypes={
  name: PropTypes.string.isRequired,
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired
}

export default Tab