import React, { Component } from "react";
import "./MovieList.style.scss";
import MovieItem from "../MovieItem/MovieItem";

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  render() {
    const mappedMovies = this.props.movies
      .map(movie => {
        return (
          <MovieItem
            omdb={movie.omdbID}
            youtube={movie.youtubeID}
            key={movie.id}
            id={movie.id}
            title={movie.title}
            myFunc={() => this.props.getID(movie)}
            delFunc={() => this.props.deleteMovie(movie.id)}
          />
        );
      })
      .filter(movie => {
        return movie.props.title
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase());
      });

    return (
      <div className="movie-list">
        <h2 className="movie-list-title">Movies To Watch</h2>
        <input
          value={this.state.searchTerm}
          placeholder="Search Movies"
          onChange={e => this.setState({ searchTerm: e.target.value })}
        />
        {/* mappedMata is a list of MovieItem Components sourced from movieAPI.json */}
        {mappedMovies}
      </div>
    );
  }
}
