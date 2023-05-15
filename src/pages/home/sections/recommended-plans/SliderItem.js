import recBike from "../../../../assets/imgs/recommended-bike.png";

function PlanImg(imgUrl) {
  if (imgUrl.url && imgUrl.url !== "") {
    return <img src={imgUrl.url} alt={imgUrl.url} />;
  } else {
    return <img src={recBike} alt="Recommended Bike" />;
  }
}

export default function SliderItem({ plan }) {
  return (
    <>
      <div className="plan-image">
        <PlanImg url={plan.imgUrl} />
      </div>
      <ul className="plan-details d-flex flex-column">
        {plan.details.map((x, i) => {
          return <li key={i}>{x}</li>;
        })}
      </ul>
      <div className="speed-column">
        <div className="speed-section">{plan.speed}</div>
        <div className="price-per-duration">
          {plan.price}/{plan.duration}
        </div>
      </div>
    </>
  );
}
