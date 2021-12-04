import React,{Component} from "react"
import "./app.scss"
import "antd/dist/antd.css"
import Header from '../Header'

class App extends Component{
    state={
        text: "Hello world"
    }

    render(){
        const {text}=this.state
        return(
            <div className="app">
                <div className="wrapper">
                    <Header text={text}/>
                </div>
            </div>
        )
    }
}

export default App