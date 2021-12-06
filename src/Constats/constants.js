const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = `0091774d5934d970b4f80690b00729e7`
export const GUEST_SESSION_API = `${BASE_URL}/authentication/guest_session/new?api_key=${API_KEY}`
export const IMAGE_API = 'https://image.tmdb.org/t/p/w1280'
export const fakePoster = 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'
export const SEARCH_API = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=`
export const FEATURED_API = `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`
export const GENRES_API = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
export const POST_OPTIONS = {
    method: 'POST',
    body: JSON.stringify(),
    headers: {
        'Content-type': 'application/json'
    }
}

