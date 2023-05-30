import logo from "../../assets/imgs/driEV.svg";
import Button from "../../components/Button";
import Navigation from "./Navigation";

export default function Header() {
  const goToPartnerWithUs = (e) => {
    console.log("working");
  };
  return (
    <header>
      <div className="container d-flex align-items-center justify-content-between py-4">
        <div className="header-left d-flex align-items-center gap-4">
          <div className="logo">
            <a href="./">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <Button
            className="rounded-5 px-4 py-2 partner-with-us"
            text="Partner with us"
            onClick={goToPartnerWithUs}
          />
        </div>
        <div className="header-right">
          <Navigation />
        </div>
      </div>
    </header>
  );
}
