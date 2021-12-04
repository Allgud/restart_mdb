import React,{Component} from "react"
import "./app.scss"

class App extends Component{
    state={
        text: "Hello world"
    }

    render(){
        const {text}=this.state
        return(
            <div className="container">{text}</div>
        )
    }
}

export default App