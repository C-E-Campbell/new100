import React, { Component } from "react";
import moment from "moment";
import "./Dashboard.style.scss";
import UserBox from "../../components/Dashboard/UserBox/UserBox";
import MovieList from "../../components/Dashboard/MovieList/MovieList";
import DiffModal from "../../components/Shared/DiffModal/DiffModal";
import MovieDescription from "../../components/Dashboard/MovieDescription/MovieDescription";
import Header from "../../components/Shared/DashboardHeader/DashboardHeader";
import YouWin from "../../components/Dashboard/YouWin/YouWin";
import Footer from "../../components/Shared/Footer/Footer";
import axios from "axios";

export default class Login extends Component {
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
      isEmpty: false
    };

    this.getID = this.getID.bind(this);
    this.myModalFunc = this.myModalFunc.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    axios.get("../../../server/JSON/movieAPI.json").then(response => {
      this.setState({ movieList: response.data });
    });
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
      axios.delete(`/api/movie/${id}`).then(response => {
        this.setState({ movieList: response.data, isEmpty: true });
      });
    } else {
      axios.delete(`/api/movie/${id}`).then(response => {
        this.setState({ movieList: response.data });
      });
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
    } else {
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
}
