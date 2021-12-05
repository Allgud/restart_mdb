import React from 'react'

const overviewCutter=text=> {
    const overview = text.split(' ')
    if(!text){
        return <span className="nodescription">No description</span>
    }
    if(overview.length > 20){
        return `${overview.slice(0, 20).join(' ')}...`
    }
    return text 
}

export default overviewCutter