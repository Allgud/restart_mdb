import React from "react"
import PropTypes from "prop-types"
import "./searchinput.scss"

const SearchInput=({changeInputValue, activeTab})=>(
  <div className="search">
    <input 
      type="text" 
      className="search__input"
      placeholder="Type to search..."
      onChange={evt=>changeInputValue(evt.target.value.trim())}
      disabled={activeTab!=="search"} 
    />
  </div>
)

SearchInput.propTypes={
  changeInputValue: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired
}

export default SearchInput