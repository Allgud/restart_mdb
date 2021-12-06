import {FEATURED_API, GENRES_API, GUEST_SESSION_API, SEARCH_API} from "../Constats/constants"

class MovieService {
    async getResource(api) {  
        const response = await fetch(api)
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
}

export default MovieService