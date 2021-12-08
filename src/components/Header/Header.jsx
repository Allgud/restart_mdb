import React from "react"
import Tab from "../Tabs"
import {TabConsumer} from "../../context"
import './header.scss'
import {tabsArr} from "../../Constats/constants"
import getRandomKey from "../../Constats/functions/getRandomKey"

const Header=()=>{
  const tabs=tabsArr.map((tab, index) => (
    <TabConsumer>
      {
        ({activeTab, setActiveTab})=>(
          <Tab 
            // Здесь косяк. Не срабатывает getRandomKey
            key={getRandomKey(index)}
            name={tab}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )
      }
    </TabConsumer>
  ))
  return(
  <div className="header">
    <ul className="header__tabs">
      {tabs}
    </ul>
  </div>
  )
}

export default Header