import React from "react";
import "./About.style.scss";
import { Link } from "react-scroll";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.parallaxShift);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.parallaxShift);
  }
  parallaxShift = () => {
    this.setState({
      offset: window.pageYOffset
    });
  };
  render() {
    return (
      <div
        id="toRules"
        className="about"
        data-aos="fade"
        style={{ backgroundPositionY: this.state.offset / 2 }}
      >
        <h2 className="aboutH2">Challenge Rules</h2>
        <div className="about-container">
          <div className="about-item">Two difficulties: Easy and MurderMe.</div>
          <div className="about-item">
            Depending on the difficulty, you will have a set timeline.
          </div>
          <div className="about-item">
            Watch all the movies on the list before challenge ends.
          </div>
          <div className="about-item">
            If you can complete the challenge you will receive an SVG to display
            anywhere.
            <br /> Post it as a badge of honor! Or... a badge of gore.
          </div>
          <div className="about-item">
            Note: For now, Completing this challenge is merely an integrity
            check.
          </div>
          <div className="about-item red">I can't stalk ALL of you...</div>
        </div>
        <Link duration={700} smooth={true} to="askus">
          <i id="pulse" className="fas fa-arrow-alt-circle-down fa-lg"></i>
        </Link>
      </div>
    );
  }
}

export default About;
