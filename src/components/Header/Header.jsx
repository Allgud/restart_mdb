import React from "react"
import './header.scss'

const Header = () => (
  <div className="header">
    <ul className="header__tabs">
      <li className="header__tab">
        <label htmlFor="search--tab">
          <input 
            id="search--tab" 
            type="radio" 
            name="tabs" 
            value="search"
          />Search
        </label>
      </li>
      <li className="header__tab">
        <label htmlFor="rated--tab">
          <input 
            id="rated--tab" 
            type="radio" 
            name="tabs" 
            value="search"
          />Rated
        </label>
      </li>
    </ul>
  </div>
)

export default Header