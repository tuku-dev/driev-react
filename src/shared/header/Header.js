import logo from "../../assets/imgs/driEV.svg";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header>
      <div className="container d-flex align-items-center justify-content-between py-4">
        <div className="header-left d-flex align-items-center gap-4">
          <div className="logo">
            <a href="./">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <a
            href="partner-with-us"
            className="button button-primary rounded-5 px-4 py-2 partner-with-us"
          >
            Partner with us
          </a>
        </div>
        <div className="header-right">
          <Navigation />
        </div>
      </div>
    </header>
  );
}
