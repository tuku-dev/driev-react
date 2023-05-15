import Slider from "react-slick";
import "../../../../assets/slick.min.css";
import SliderItem from "./SliderItem";

export default function RecomendedPlans() {
  const planList = [
    {
      id: 1,
      imgUrl: "",
      details: [
        "60 Kms",
        "High Speed",
        "No DL Required",
        "Zero Tail Pipe Emmission",
        "Pocket Friendly",
      ],
      speed: "Speed",
      price: "200",
      duration: "day",
    },
    {
      id: 2,
      imgUrl: "",
      details: [
        "60 Kms",
        "High Speed",
        "No DL Required",
        "Zero Tail Pipe Emmission",
        "Pocket Friendly",
      ],
      speed: "Speed +",
      price: "250",
      duration: "day",
    },
    {
      id: 3,
      imgUrl: "",
      details: [
        "70 Kms",
        "High Speed",
        "No DL Required",
        "Zero Tail Pipe Emmission",
        "Pocket Friendly",
      ],
      speed: "Speed +",
      price: "270",
      duration: "day",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 2,
    slidesToScroll: 1,
    gap: 15,
    arrows: false,
  };
  return (
    <div className="recommended-section-container">
      <p className="text-white">Recommended Plans</p>
      <div className="plans">
        <Slider {...settings}>
          {planList.map((x) => {
            return (
              <div className="plan-item p-3 pb-3 pb-lg-5" key={x.id}>
                <SliderItem plan={x} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
