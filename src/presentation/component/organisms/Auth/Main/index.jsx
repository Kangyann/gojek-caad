import { Link } from "react-router-dom";

import googleLogo from "core/assets/images/base/google.a0k2mdl2.svg";
import facebookLogo from "core/assets/images/base/facebook.a29a07e9.svg";
import appleLogo from "core/assets/images/base/apple.f8770556.svg";
import corporatesLogo from "core/assets/images/base/corporates.png";
import blibliLogo from "core/assets/images/base/blibli.webp";

const Main = ({ ...data }) => {
  const link = {
    corporates:
      "https://www.tiket.com/login/corporate?ref=https%3A%2F%2Fwww.tiket.com%2F",
    tos: "https://www.tiket.com/info/tos",
    privacy: "https://www.tiket.com/info/privacy-policy",
  };
  const rules = {
    title: null,
    other_choose: null,
  };
  data.key_id === "Log In"
    ? (rules.title = "Log In")
    : (rules.title = "Register");
  data.key_id === "Log In"
    ? (rules.other_choose = "Atau log in dengan")
    : (rules.other_choose = "Atau gunakan akun");
  return (
    <>
      <div className="auth__main">
        <div className="container">
          <div className="auth__main__form">
            <h3>{rules.title}</h3>
            <form action="">
              <input type="text" placeholder="Nomor Ponsel atau Email" />
              <button type="submit">{rules.title === "Log In" ? "Log In" : "Buat Akun"}</button>
            </form>
            <div className="auth__main__form__other">
              <hr />
              <p>{rules.other_choose}</p>
            </div>
            <div className="auth__main__form__logo">
              <img src={appleLogo} alt="Apple Logo" />
              <img src={googleLogo} alt="Google Logo" />
              <img src={facebookLogo} alt="Facebook Logo" />
            </div>
            <div className="auth__main__form__text">
              <p>
                {rules.title === "Log In" && (
                  <>
                    Dengan login kamu menyetujui
                    <Link to={link.tos} className="auth__main__form__text__link"> Syarat & Ketentuan </Link> dan
                    <Link to={link.privacy} className="auth__main__form__text__link"> Kebijakan Privasi </Link>
                    tiket.com.
                  </>
                )}
                {rules.title === "Register" && (
                  <>
                    Dengan membuat akun kamu menyetujui
                    <Link to={link.tos} className="auth__main__form__text__link"> Syarat & Ketentuan </Link> dan
                    <Link to={link.privacy} className="auth__main__form__text__link"> Kebijakan Privasi </Link>Kami
                  </>
                )}
              </p>
              <p>
                {data.option.text}
                <Link to={data.option.to} className="auth__main__form__text__link"> {data.option.link_text}</Link>
              </p>
            </div>
          </div>
          <div className="auth__main__footer">
            <Link className="auth__main__footer__link" to={link.corporates}>
              <img src={corporatesLogo} alt="Footer Icon" />
              <p>Klik untuk log in dengan akun tiket.com for Corporates</p>
            </Link>
            <Link className="auth__main__footer__link">
              <img src={blibliLogo} alt="Footer Icon" />
              <p>© 2011-2024 PT. Global Tiket Network. All Rights Reserved</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
