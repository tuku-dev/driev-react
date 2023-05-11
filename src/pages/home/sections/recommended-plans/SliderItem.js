export default function SliderItem({ plan }) {
  return (
    <>
      <div className="plan-image">
        <img src={plan.img} alt={plan.img} />
        <img src="../../../../assets/imgs/recommended-bike.png" alt="" />
      </div>
      <ul className="plan-details d-flex flex-column">
        <li> </li>
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
