import axios from "axios";

// const API_KEY = '9bd9d6fdfd477ad4ce71dca61f64f2d0';

const API_KEY = '0431834c535ecb8b718ac720e46307f3';


const baseUrl = 'https:/api.themoviedb.org/3/';
export const baseImgUrl = "https://image.tmdb.org/t/p/w500/";

export const apis = {
   getPopularMovies : () => axios.get(baseUrl + 'movie/popular?', {
      params: {
         api_key: API_KEY,
      },
   }),

   getMoviePage : (page) => axios.get(baseUrl + `/movie/popular`, {
      params:{
         api_key: API_KEY,
         page: page,
      },
   }),

   getLatestMovies : () => axios.get(baseUrl + 'movie/upcoming?', {
      params:{
         api_key: API_KEY,
      },
   }),
   getTopMovies : () => axios.get(baseUrl + 'movie/top_rated?', {
      params:{
         api_key: API_KEY,
      },
   }),
   getMovies : (id) => axios.get(baseUrl + '/movie/' + id, {
      params:{
         api_key: API_KEY,
      },
   }),
   
   getMovieCredits : (id) => axios.get(baseUrl + `/movie/${id}/credits`, {
      params:{
         api_key: API_KEY,
      },
   }),
   getMovieCreditsFilm : (id) => axios.get(baseUrl + `/movie/${id}/similar`, {
      params:{
         api_key: API_KEY,
      },
   }),
   getMoviePeople : (id) => axios.get(baseUrl + `/person/${id}`, {
      params:{
         api_key: API_KEY,
      },
   }),
   getMoviePeopleFilm : (id) => axios.get(baseUrl + `/person/${id}/movie_credits`, {
      params:{
         api_key: API_KEY,
      },
   }),
   getMovieVidioFilm : (id) => axios.get(baseUrl + `/movie/${id}/videos`, {
      params:{
         api_key: API_KEY,
      },
   }),
   getMovieSearch : (searchQuery) => axios.get(baseUrl + `/search/movie?query=` + searchQuery, {
      params:{
         api_key: API_KEY,
      },
   }),
}