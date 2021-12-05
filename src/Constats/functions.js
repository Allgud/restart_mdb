import React from 'react'

const overviewCutter=text=> {
    if(!text){
        return <span className="nodescription">No description</span>
    }
    if(text.split(' ').length > 20){
        return text.split(' ').slice(0, 15).concat(["..."]).join(' ')
    }
    return text 
}

export default overviewCutter