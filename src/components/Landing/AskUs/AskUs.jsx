import React from "react";
import { Link } from "react-scroll";
import "./AskUs.style.scss";

const AskUs = () => {
  return (
    <section className="ask-us" id="askus">
      <h2 className="askUsH2">Features</h2>
      <section className="feature-section">
        <div className="feature-item one">
          <i className="fas fa-video fa-3x"></i>
          <div>
            <h5>Movie Trailers</h5>
            <p>One click access to the trailer for any of the 100 movies.</p>
          </div>
        </div>
        <div className="feature-item two">
          <i className="fas fa-film fa-3x"></i>
          <div>
            <h5>Movie Details</h5>
            <p>
              Cast, Plot, Director, Year released. Movie facts at the click of a
              button.
            </p>
          </div>
        </div>
        <div className="feature-item three">
          <i className="fas fa-pencil-alt fa-3x"></i>
          <div>
            <h5>Movie Journal</h5>

            <p>
              Spill Your Guts is a place to keep any notes or thoughts on the
              movies you watch.
            </p>
          </div>
        </div>
      </section>
      <section className="ask-us-container">
        <div>
          <h2 data-aos="fade-up" data-aos-delay="200">
            Would you like to see a movie added to the list? <br />
            Send us a note!
          </h2>
          <form>
            <input
              className="ask-input"
              type="text"
              placeholder="Add this movie!"
            />
            <button>Send</button>
          </form>
        </div>
      </section>
      <Link duration={500} smooth={true} to="header">
        <i id="pulse2" className="fas fa-arrow-alt-circle-up fa-lg"></i>
      </Link>
    </section>
  );
};

export default AskUs;
