import React from "react"
import Tab from "../Tabs"
import {TabConsumer} from "../../context"
import './header.scss'
import {tabsArr} from "../../Constats/constants"

const Header=()=>{
  const tabs=tabsArr.map(tab=>{
    const {id, title}=tab
    return(
      <TabConsumer>
        {
          ({activeTab, setActiveTab})=>(
            <Tab 
              key={id}
              name={title}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          )
        }
      </TabConsumer>
    )
  })
  return(
  <div className="header">
    <ul className="header__tabs">
      {tabs}
    </ul>
  </div>
  )
}

export default Header