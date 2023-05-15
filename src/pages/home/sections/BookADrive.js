import Plus from "../../../assets/imgs/plus-icon.svg";
import Minus from "../../../assets/imgs/minus-icon.svg";

export default function BookADrive() {
  return (
    <form>
      <div className="search-form-container align-items-end">
        <div className="city-section d-flex flex-column">
          <label className="form-label text-white">Search your City</label>
          <input
            type="text"
            className="form-control search-city search-input"
          />
        </div>
        <div className="rental-type-section">
          <label className="form-label text-white">Rental Type</label>
          <select
            name="rentalType"
            id="rentalType"
            className="form-select search-input search-type"
            required
          >
            <option value="">Select</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="subscription">Subscription</option>
          </select>
        </div>
        <div className="duration-section">
          <label className="form-label text-white">Select Duration</label>
          <div className="search-input d-flex align-items-center gap-2">
            <input
              type="text"
              className="select-duration"
              placeholder="Day(s)"
            />
            <div className="controls d-flex gap-2 ms-auto">
              <span className="d-inline-block">
                <img src={Minus} alt="Minus" />
              </span>
              <span className="value">00</span>
              <span className="d-inline-block">
                <img src={Plus} alt="Plus" />
              </span>
            </div>
          </div>
        </div>
        <div className="date-time-section">
          <label className="form-label text-white">Choose Date & Time</label>
          <div className="search-input align-items-center gap-2">
            <input
              type="text"
              className="choose-date text-primary"
              readOnly
              placeholder="DD / MM / YYYY"
            />
            <input
              type="text"
              className="choose-time text-primary"
              readOnly
              placeholder="HH : MM hrs"
            />
          </div>
        </div>
        <div className="proceed-section">
          <button className="button">Proceed</button>
          {/* To disable this add class disabled */}
        </div>
      </div>
    </form>
  );
}
