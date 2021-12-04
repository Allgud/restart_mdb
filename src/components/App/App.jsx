import React,{Component} from "react"
import "./app.scss"
import "antd/dist/antd.css"
import Header from '../Header'
import SearchInput from "../SearchInput"
import Content from "../Content"

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
                    <SearchInput />
                    <Content />
                </div>
            </div>
        )
    }
}

export default App