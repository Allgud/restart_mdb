import React,{Component} from "react"
import "./app.scss"
import "antd/dist/antd.css"
import {debounce} from "lodash"
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
    inputValue: ''
  }

  movieService = new MovieService()

  changeInputValue=debounce(string=>{
    if(!string) return
    this.setState({
      inputValue: string
    })}, 500
  )

  componentDidMount(){
    this.createGuestSession()
    this.getMovieList()
    this.getMoviesGenres()
  }

  componentDidUpdate(__, prev){
    const {inputValue}=this.state
    if(inputValue !== prev.inputValue){
      this.getSearchList()
    }
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
  
  getSearchList=()=>{
    const {inputValue}=this.state
    this.setState({loading: true})
    this.movieService.getSearchMovies(inputValue)
      .then(searchList => this.setState({
        loading: false,
        movies: searchList.results,
        currentPage: searchList.page,
        totalPages: searchList.total_results
      }))
  }

  changePage=num=>{
    this.setState({loading: true})
    const {inputValue}=this.state
    this.movieService.changePage(inputValue, num)
      .then(changedList => this.setState({
        loading: false,
        movies: changedList.results,
        currentPage: changedList.page,
      }))
  }

  render(){
    const {movies, genres, loading, inputValue, currentPage, totalPages}=this.state
    return(
      <GenresProvider value={genres}>
        <div className="app">
          <div className="wrapper">
            <Header />
            <SearchInput
              changeInputValue={this.changeInputValue} 
            />
            {loading ? <Spinner /> : <Content movies={movies}/>}
            {inputValue && <Paginator 
              current={currentPage} 
              total={totalPages}
              changePage={this.changePage}
            />}            
          </div>
        </div>
      </GenresProvider>
    )
  }
}

export default App