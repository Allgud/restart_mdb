import React,{Component} from "react"
import "./app.scss"
import "antd/dist/antd.css"
import Header from '../Header'
import SearchInput from "../SearchInput"
import Content from "../Content"
import MovieService from "../../service/Service"
import {GenresProvider} from "../../context"

class App extends Component{
  state={
    movies: [],
    genres: []
  }

  movieService = new MovieService()

  componentDidMount(){
    this.getMovieList()
    this.getMoviesGenres()
  }

  getMovieList=()=>
    this.movieService.getMovies()
    .then(data => this.setState({
      movies: data.results
    }))

  getMoviesGenres=()=>
    this.movieService.getGenres()
    .then(obj => this.setState({
      genres: obj.genres
    }))

  render(){
    const {movies, genres}=this.state
    return(
      <GenresProvider value={genres}>
        <div className="app">
          <div className="wrapper">
            <Header />
            <SearchInput />
            <Content movies={movies}/>
          </div>
        </div>
      </GenresProvider>
    )
  }
}

export default App