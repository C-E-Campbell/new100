import React from "react";
import Header from "../../Shared/Header/Header";
import { Link } from "react-scroll";
import "./Hero.style.scss";

class Hero extends React.Component {
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
      <div>
        <Header />
        <div
          className="hero"
          style={{ backgroundPositionY: this.state.offset / 9 }}
        >
          <div
            style={{
              top: this.state.offset / 6
            }}
            className="hero-text-container"
          >
            <div className="hero-cta-box" data-aos="fade" data-aos-delay="50">
              <h1>Can you live through the challenge?</h1>
              <p>
                <span className="red">Tempt Fate. </span>Take the 100 day horror
                movie challenge.
              </p>
              <Link id="bigBtn" duration={600} smooth={true} to="toRules">
                THE RULES
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
