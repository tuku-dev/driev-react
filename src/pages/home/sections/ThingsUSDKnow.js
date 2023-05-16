import SectionTitle from "../../../components/SectionTitle";
import usdKnow from "../../../assets/imgs/things-you-should-know.png";

export default function ThingsUSDKnow() {
  const data = {
    title: "Things You Should Know",
    description:
      "Using EV for first time?... We are here to clear you out with all your doubts.",
  };

  return (
    <div className="container things-you-should-know px-3 px-lg-1 mt-3 mt-md-5 py-2 py-md-5">
      <SectionTitle {...data} />
      <div className="detail-box d-flex flex-wrap gap-4">
        <div className="image-box">
          <img src={usdKnow} alt="" />
        </div>
        <div className="details-content d-flex flex-column gap-3">
          <div className="detail-item">
            <div className="icon-section">
              <div className="bg-electrical_services"></div>
            </div>
            <div className="content-section">
              <p className="text-center">
                <strong>How to Charge?</strong>
              </p>
              <p>Turn off the MCB first, disconnect.....</p>
            </div>
          </div>
          <div className="detail-item">
            <div className="icon-section">
              <div className="bg-ev_charger"></div>
            </div>
            <div className="content-section">
              <p className="text-center">
                <strong>Where to charge?</strong>
              </p>
              <p>You can charge your bike in any 5 amp socket</p>
            </div>
          </div>
          <div className="detail-item">
            <div className="icon-section">
              <div className="bg-request_quote"></div>
            </div>
            <div className="content-section">
              <p className="text-center">
                <strong>What is the range?</strong>
              </p>
              <p>It varies from vehicle to vehicle but minimum...</p>
            </div>
          </div>
          <div className="detail-item">
            <div className="icon-section">
              <div className="bg-hourglass_top"></div>
            </div>
            <div className="content-section">
              <p className="text-center">
                <strong>How long does it take to full charge?</strong>
              </p>
              <p>It normally takes 3-3.5hrs.....</p>
            </div>
          </div>

          <div className="text-center mt-auto">
            <a
              href="!#"
              className="learn-more-button button button-primary d-inline-block mt-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
