import React from "react"
import PropTypes from "prop-types"
import "./searchinput.scss"

const SearchInput=({getSearchList})=>(
    <div className="search">
        <input 
          type="text" 
          className="search__input"
          placeholder="Type to search..."
          onChange={evt=>getSearchList(evt.target.value.trim())} 
        />
    </div>
)

SearchInput.propTypes={
  // value: PropTypes.string.isRequired,
  getSearchList: PropTypes.func.isRequired
}

export default SearchInput