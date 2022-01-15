import React, { Component } from "react";
import "../App.css";
import "../styles/textoverimage.css";
import { Link } from "react-router-dom";
import NavbarComp from "../components/navbar";
import Image from "react-bootstrap/Image";

class AboutUs extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="banner">
            <NavbarComp />
            <Image
              src="http://img.arirang.com/A_UpFile/Template/TP160826095440_A1.png"
              width="100%"
            />

            {/* <CarouselComp /> */}
          </div>
        </section>

        <div className="container" style={{ marginTop: "5%" }}>
          {/* <h1>About Us</h1>  */}
          <br />
          <br />
          <br />
          <br />

          <p style={{ textAlign: "left", fontSize: "large" }}>
            <br />
            <br />
            <h1>Helping your tour</h1>
            <br />
            At tour we love to help people find their perfect destination. We
            love creating connections between people and places, and enable
            thousands of travelers to have unique experiences every moment. Our
            company was created from a desire to help people find a sense of
            home in new environments. Our business works by connecting travelers
            to hosts, 150 countries and 90,000 destinations. Since since our
            inception in 2020, we have become synonymous with international
            hospitality, and pioneers in the travel industry. Our services are
            powered by technology, strong teamwork, and round the clock customer
            support. With more and more of the world coming online, more people
            look to online services to book vacations, business trips and
            adventures.
            <br />
            <br />
            <br />
            <br />
            <p>Keep Exploring!</p>
            <center>
              <Link to="/explore">
                <button className="extra-btn" onClick={this.updateNum}>
                  {" "}
                  Experience tour
                </button>
              </Link>
            </center>
            <br />
            <br />
            <br />
          </p>
        </div>
      </div>
    );
  }
}

export default AboutUs;
