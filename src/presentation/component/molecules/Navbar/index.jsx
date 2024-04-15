import Logo from "core/assets/images/base/gojek_header.svg";
import { Link, useLocation } from 'react-router-dom'
const Navbar = () => {
  const location = useLocation();
  const menuList = [
    {
      to: "/",
      name: "Home",
    },
    {
      to: "/partner",
      name: "Partner with us",
    },
    {
      to: "/careers",
      name: "Careers",
    },
    {
      to: "/company",
      name: "Company",
    },
    {
      to: "/products",
      name: "Products",
    },
    {
      to: "/blog",
      name: "Blog",
    },
    {
      to: "/help",
      name: "Help",
    },
  ];

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__inner">
          {/* Logo */}
          <div className="navbar__logo">
            <a href="/" className="navbar__logo__lnk">
              <img src={Logo} alt="Gojek Logo" />
            </a>
          </div>
          {/* Menu */}
          <ul className="navbar__menu">
            {menuList.map((val, idx) => (
              <li className="navbar__menu__item" key={`hm-${idx}`}>
                <Link to={val.to} className={`navbar__menu__lnk ${location.pathname === val.to ? "active" : ""}`}>
                  {val.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
