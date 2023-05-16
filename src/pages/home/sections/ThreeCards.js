import Slider from "react-slick";

import tenure from "../../../assets/imgs/card-1.png";
import choose from "../../../assets/imgs/card-2.png";
import enjoy from "../../../assets/imgs/card-3.png";
import one from "../../../assets/imgs/1.png";
import two from "../../../assets/imgs/2.png";
import three from "../../../assets/imgs/3.png";

export default function ThreeCards() {
  const settings = {
    dots: false,
    infinite: false,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    touchMove: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2500,
          slidesToShow: 2,
          slidesToScroll: 1,
          touchMove: true,
          pauseOnHover: true,
        },
      },
    ],
  };
  return (
    <div className="three-cards bg-white py-3 py-md-5">
      <div className="container px-3 px-lg-1">
        <Slider {...settings}>
          <div className="card-item">
            <div className="card card-1 d-flex flex-column pb-4">
              <img src={one} alt="Step One" />
              <h3>Choose Your Desired Tenure</h3>
              <div className="icon-section">
                <img
                  src={tenure}
                  className="img-fluid"
                  alt="Choose Your Desired Tenure"
                />
              </div>
            </div>
          </div>
          <div className="card-item">
            <div className="card card-2 d-flex flex-column pb-4">
              <img src={two} alt="Step Two" />
              <h3>Choose Your Plan & Pay</h3>
              <div className="icon-section">
                <img
                  src={choose}
                  className="img-fluid"
                  alt="Choose Your Plan & Pay"
                />
              </div>
            </div>
          </div>
          <div className="card-item">
            <div className="card card-3 d-flex flex-column pb-4">
              <img src={three} alt="Step Three" />
              <h3>Ride Guilt Free & Enjoy</h3>
              <div className="icon-section">
                <img
                  src={enjoy}
                  className="img-fluid"
                  alt="Ride Guilt Free & Enjoy"
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
