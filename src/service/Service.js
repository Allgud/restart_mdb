import {FEATURED_API, GENRES_API, GUEST_SESSION_API, RATING_API, RATE_API, RATING_QUERIES, SEARCH_API} from "../Constats/constants"

class MovieService {
  async getResource(api, options){  
    const response = await fetch(api, options)
    if(!response.ok&&response.status!==422){
      throw new Error(`${response.status}`)
    }
    const res = await response.json()
    return res
  }
    
  getMovies(){
    return this.getResource(FEATURED_API)
  }

  getGenres(){
    return this.getResource(GENRES_API)
  }

  newGuestSession(){
    return this.getResource(GUEST_SESSION_API)
  }

  getSearchMovies(str) {
    return this.getResource(SEARCH_API + str)
  }

  changePage(str, num=1){
    const page=`&page=${num}`
    return this.getResource(SEARCH_API + str + page)
  }

  getRatedMovies(){
    return this.getResource(RATING_API)
  }

  postRating(num, movieId){
    const url = `${RATE_API}${movieId}${RATING_QUERIES}`
    const opts = {
      method: 'POST',
      body: JSON.stringify({value: num}),
      headers: {
        'Content-type': 'application/json'
      }
    }
    return this.getResource(url, opts)
  } 
}

export default MovieService