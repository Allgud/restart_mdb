export const BASE_URL = 'https://api.themoviedb.org/3'
export const API_KEY = `0091774d5934d970b4f80690b00729e7`
export const SEARCH_API = `${this.BASE_URL}/search/movie?api_key=${this.API_KEY}&query=`
export const FEATURED_API = `${this.BASE_URL}/discover/movie?api_key=${this.API_KEY}&sort_by=popularity.desc`
export const GENRES_API = `${this.BASE_URL}/genre/movie/list?api_key=${this.API_KEY}`
export const POST_OPTIONS = {
    method: 'POST',
    body: JSON.stringify(),
    headers: {
        'Content-type': 'application/json'
    }
}