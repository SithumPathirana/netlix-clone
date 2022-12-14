import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';

const image_base_url = 'https://image.tmdb.org/t/p/original';

export default function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(requests.fetchOriginals);
      const movies = response.data.results;
      const movieIndex = Math.floor(Math.random() * movies.length - 1);
      setMovie(movies[movieIndex]);
      return response;
    }

    fetchData();
  }, []);

  function truncate(str, n) {
    return (str != null && str.length) > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    //   Backgroud Image
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(
              ${image_base_url}${movie?.backdrop_path}
            )`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner_content">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button"> Play</button>
          <button className="banner_button">My List </button>
        </div>

        <h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="banner-fade-bottom"> </div>
    </header>
  );
}
