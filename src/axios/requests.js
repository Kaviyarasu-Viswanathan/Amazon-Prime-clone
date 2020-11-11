const API_KEY = "23ad885b8761d3c186e210b1b16a3585"
/* https://api.themoviedb.org/3/movie/550?api_key=23ad885b8761d3c186e210b1b16a3585 */
export default {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
    fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedy:  `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorror:  `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomance:  `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchMystery:   `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchScifi:  `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchWestern:  `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    fetchAnimation:  `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchMovie:   `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    
}