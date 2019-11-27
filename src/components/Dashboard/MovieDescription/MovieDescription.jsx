import React, { Component } from "react";
import "./MovieDescription.style.scss";

import VideoModal from "../VideoModal/VideoModal";

export default class MovieDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultMovie: {
        Title: "The Exorcist",
        Actors: "Ellen Burstyn, Max von Sydow, Lee J.Cobb, Kitty Winn",
        Plot:
          "A visiting actress in Washington, D.C., notices dramatic and dangerous changes in the behavior and physical make-up of her 12-year-old daughter. Meanwhile, a young priest at nearby Georgetown University begins to doubt his faith while dealing with his mother's terminal sickness. And, book-ending the story, a frail, elderly priest recognizes the necessity for a show-down with an old demonic enemy.",
        Director: "William Friedkin",
        Released: "26 Dec 1973",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYjhmMGMxZDYtMTkyNy00YWVmLTgyYmUtYTU3ZjcwNTBjN2I1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
      }
    };
  }

  //4c3ee338

  render() {
    let videoID = `https://www.youtube.com/embed/${this.props.trailer ||
      "YDGw1MTEe9k"}`;
    const {
      Poster,
      Actors,
      Plot,
      Director,
      Title,
      Released
    } = this.props.movieData;

    return (
      <section className="movie-description-box">
        <h1>{Title || this.state.defaultMovie.Title}</h1>
        <img
          src={Poster || this.state.defaultMovie.Poster}
          alt="movie poster"
        />
        <VideoModal src={videoID} />
        <h3>{`Cast: ${Actors || this.state.defaultMovie.Actors}`}</h3>
        <p className="plot">{`Plot: ${Plot ||
          this.state.defaultMovie.Plot}`}</p>
        <div className="movie-info">
          <p>{`Director: ${Director || this.state.defaultMovie.Director}`}</p>
          <p className="released">{`Released: ${Released ||
            this.state.defaultMovie.Released}`}</p>
        </div>
      </section>
    );
  }
}
