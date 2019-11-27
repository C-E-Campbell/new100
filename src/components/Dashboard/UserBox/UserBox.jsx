import React, { Component } from "react";
import "./UserBox.style.scss";
export default class UserBox extends Component {
  render() {
    return (
      <div className="user-box">
        <div className="user-box-data">
          <h1>Charles Campbell</h1>
          <div>
            <h5>{`Challenge Started: ${this.props.acctStart}`}</h5>
            <h5 className="dateEnds">{`Fate Determined: ${this.props.acctEnd}`}</h5>
            <h5 className="orange">{`Difficulty: ${this.props.difficulty}`}</h5>
            {/* <h5>Test Date Format</h5>
						<h5>Test Date Format</h5>
						<h5>Test Difficulty</h5> */}
          </div>
        </div>
        <div data-aos="fade-left" className="user-box-percentage">
          <p>Percentage Completed</p>
          <p className="orange">{100 - this.props.movieListLength}%</p>
        </div>
      </div>
    );
  }
}
