const API_KEY = "39315bd77de70e4303b2bf6f38127723";

const requests = {
    fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
    fetchOriginals: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10749`,
    fetchDocumentries: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=99`,
}

export default requests;