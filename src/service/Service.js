import {FEATURED_API, GENRES_API} from "../Constats/constants"

class MovieService {
    async getResource(api) {  
        const response = await fetch(api)
        if(response.status === 422){
            throw new Error(`Please insert film title`)
        }
        if(!response.ok && response.status !== 422){
            throw new Error(`Received status ${response.status}`)
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
}

export default MovieService