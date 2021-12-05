import React,{Component} from "react"
import "./app.scss"
import "antd/dist/antd.css"
import Header from '../Header'
import SearchInput from "../SearchInput"
import Content from "../Content"
import MovieService from "../../service/Service"

class App extends Component{
  state={
    movies: []
  }

  movieService = new MovieService()

  componentDidMount(){
    this.getMovieList()
  }

  getMovieList=()=>
    this.movieService.getMovies()
    .then(data => this.setState({
      movies: data.results
    }))

  render(){
    const {movies}=this.state
    return(
      <div className="app">
        <div className="wrapper">
          <Header />
          <SearchInput />
          <Content movies={movies}/>
        </div>
      </div>
    )
  }
}

export default App