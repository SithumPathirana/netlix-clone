import React, { useEffect, useState } from 'react';
import axios from '../axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const image_base_url = 'https://image.tmdb.org/t/p/original';

function Row({ title, fetchUrl, isPoster }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUl] = useState('');

  useEffect(() => {
    // Run once when row loads and don't run again. When movies chagnes run it back agian

    async function fetchData() {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
      return response;
    }

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

    const onImageClick = (movie) => {
        console.log(movie);
        console.log(trailerUrl);
    if (trailerUrl) {
      setTrailerUl('');
    } else {
      movieTrailer(
        movie?.name || movie?.title,
        {
          "id": true,
          "multi": false,
        },
        (error, response) => {
          if (response) {
            setTrailerUl(response);
          }
          if (error) {
            console.log(error);
          }
        }
      );
    }
  };

  return (
    <div className="row">
      <h2> {title} </h2>

      <div className="row-images">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row-image ${isPoster && 'row-image-large'}`}
            onClick={() => onImageClick(movie)}
            src={`${image_base_url}${
              isPoster ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>

      {trailerUrl && (
        <YouTube videoId={trailerUrl} opts={opts}>
          {' '}
        </YouTube>
      )}
    </div>
  );
}

export default Row;
