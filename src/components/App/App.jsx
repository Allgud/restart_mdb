import React,{Component} from "react"
import "./app.scss"
import "antd/dist/antd.css"
// import {debounce} from "lodash"
import Header from "../Header"
import SearchInput from "../SearchInput"
import Content from "../Content"
import Spinner from "../Spinner"
import Paginator from "../Pagination"
import MovieService from "../../service/Service"
import {GenresProvider} from "../../context"

class App extends Component{
  state={
    movies: [],
    genres: [],
    loading: true,
    currentPage: 1,
    totalPages: 1,
    // inputValue: ''
  }

  movieService = new MovieService()

  componentDidMount(){
    this.createGuestSession()
    this.getMovieList()
    this.getMoviesGenres()
  }

  componentWillUnmount(){
    localStorage.removeItem('id')
  }

  getMovieList=()=>
    this.movieService.getMovies()
      .then(data => this.setState({
        movies: data.results,
        loading: false
      }))

  getMoviesGenres=()=>
    this.movieService.getGenres()
      .then(obj => this.setState({
        genres: obj.genres
      }))

  createGuestSession=()=>
    this.movieService.newGuestSession()
      .then(sessionId => localStorage.setItem('id', sessionId.guest_session_id))
  
  getSearchList= text =>{
    if(!text) return
    this.movieService.getSearchMovies(text)
      .then(searchList => this.setState({
        movies: searchList.results,
        currentPage: searchList.page,
        totalPages: searchList.total_results
      }))
  }



  render(){
    const {movies, genres, loading, currentPage, totalPages}=this.state
    return(
      <GenresProvider value={genres}>
        <div className="app">
          <div className="wrapper">
            <Header />
            <SearchInput
              getSearchList={this.getSearchList} 
            />
            {loading ? <Spinner /> : <Content movies={movies}/>}
            <Paginator 
              current={currentPage} 
              total={totalPages}
            />            
          </div>
        </div>
      </GenresProvider>
    )
  }
}

export default App