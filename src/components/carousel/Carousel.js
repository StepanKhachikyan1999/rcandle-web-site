import React, { Component } from "react";
import Slider from "react-slick";
import WOW from "wowjs";
import slider1 from "../../img/slider1.png";
import slider2 from "../../img/slider2.png";

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <div {...props}>
        <h3>{index}</h3>
      </div>
    );
  }
}

export default class Responsive extends Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    // ---- ^^ const wow = WOW(); maybe new syntax, check docs! ^^----
    wow.init();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
    };
    return (
      <div>
        <Slider {...settings} className="sliderMain">
          <div className="sliderText">
            <h4
              className="textOne wow slideInLeft"
              data-wow-duration="1s"
              data-wow-delay="1.5s"
            >
              THE MOMENT
            </h4>
            <img src={slider1} style={{ height: "387px", width: "100%" }} />
          </div>
          <div className="sliderText">
            <h4
              className="textTwo wow slideInLeft"
              data-wow-duration="1s"
              data-wow-delay="1.5s"
            >
              THE MOMENT
            </h4>
            <img src={slider2} />
          </div>
        </Slider>
      </div>
    );
  }
}
