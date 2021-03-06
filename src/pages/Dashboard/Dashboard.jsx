import React, { Component } from "react";
import moment from "moment";
import { withRouter } from "react-router";
import "./Dashboard.style.scss";
import UserBox from "../../components/Dashboard/UserBox/UserBox";
import MovieList from "../../components/Dashboard/MovieList/MovieList";
import DiffModal from "../../components/Shared/DiffModal/DiffModal";
import MovieDescription from "../../components/Dashboard/MovieDescription/MovieDescription";
import Header from "../../components/Shared/DashboardHeader/DashboardHeader";
import YouWin from "../../components/Dashboard/YouWin/YouWin";
import Footer from "../../components/Shared/Footer/Footer";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      acctEnd: null,
      movieList: [],
      movieItem: [],
      difficultyFlag: false,
      difficulty: "",
      currentMovie: {},
      trailerID: "",
      isEmpty: false,
      freshList: []
    };

    this.getID = this.getID.bind(this);
    this.myModalFunc = this.myModalFunc.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  async componentDidMount() {
    const id = this.props.id;
    const movies = await axios.get("/movie/getMovieList");
    // console.log(movies);
    const finishedMovieIds = await axios.get(`/movie/getmovies/${id}`);
    console.log(finishedMovieIds);
    const updatedList = finishedMovieIds.data;
    console.log(updatedList);
    let editedList = movies.data;
    if (updatedList.length > 0) {
      updatedList.forEach(id => {
        console.log(id);
        const index = editedList.findIndex(movie => movie.id === id);
        editedList.splice(index, 1);
      });
    }

    this.setState({ movieList: editedList });
  }

  getID(movieData) {
    const { omdbID, youtubeID } = movieData;
    axios
      .get(`https://www.omdbapi.com/?apikey=4c3ee338&i=${omdbID}&plot=full`)
      .then(response => {
        this.setState({ currentMovie: response.data, trailerID: youtubeID });
      });
  }

  deleteMovie(id) {
    if (this.state.movieList.length === 1) {
      const newMovieList = this.state.movieList.filter(movie => {
        if (movie.id !== id) {
          return movie;
        }
      });
      this.setState({ movieList: newMovieList, isEmpty: true });
    } else {
      const newMovieList = this.state.movieList.filter(movie => {
        if (movie.id !== id) {
          return movie;
        }
      });
      this.setState({ movieList: newMovieList });
      const user = this.props.id;
      axios.delete(`/movie/deleteMovie/${id}/${user}`);
    }
  }
  async myModalFunc(diff) {
    if (diff === "Easy") {
      const finish = moment()
        .add(1, "year")
        .format("LL");
      const result = await axios.post("/users/setMode", {
        user: this.props.id,
        finishDay: finish,
        mode: "Easy"
      });

      this.setState({
        difficultyFlag: true,
        difficulty: diff,
        acctEnd: result.data
      });
    } else if (diff === "MurderMe") {
      const finish = moment()
        .add(100, "day")
        .format("LL");
      const result = await axios.post("/users/setMode", {
        user: this.props.id,
        finishDay: finish,
        mode: "MurderMe"
      });

      this.setState({
        difficultyFlag: true,
        difficulty: diff,
        acctEnd: result.data
      });
    }
  }

  render() {
    if (!this.props.id) {
      this.props.history.push("/");
    }
    if (this.props.diff) {
      return (
        <div>
          <Header logout={this.props.logout} />
          <div className="dashboard">
            <UserBox
              name={this.props.name}
              movieListLength={this.state.movieList.length}
              difficulty={this.props.mode || this.state.difficulty}
              acctStart={this.props.start}
              acctEnd={this.state.acctEnd || this.props.finish}
            />
            <MovieList
              getID={this.getID}
              movies={this.state.movieList}
              deleteMovie={this.deleteMovie}
            />
            <MovieDescription
              trailer={this.state.trailerID}
              movieData={this.state.currentMovie}
            />
          </div>

          <Footer />
        </div>
      );
    }
    if (!this.state.difficultyFlag) {
      return <DiffModal myModalFunc={this.myModalFunc} />;
    }
    if (this.state.isEmpty) {
      return <YouWin className={("youwin", "move")} />;
    }
    return (
      <div>
        <Header />
        <div className="dashboard">
          <UserBox
            name={this.props.name}
            movieListLength={this.state.movieList.length}
            difficulty={this.state.difficulty}
            acctStart={this.props.start}
            acctEnd={this.state.acctEnd || this.props.finish}
          />
          <MovieList
            getID={this.getID}
            movies={this.state.movieList}
            deleteMovie={this.deleteMovie}
          />
          <MovieDescription
            trailer={this.state.trailerID}
            movieData={this.state.currentMovie}
          />
        </div>

        <Footer />
      </div>
    );
  }
}
export default withRouter(Login);
