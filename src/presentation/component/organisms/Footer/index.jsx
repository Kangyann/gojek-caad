import Logo from "core/assets/images/base/gojek_header.svg";
import { Link } from 'react-router-dom'

const Footer = () => {
    const data = [
        {
            title: "Company",
            link_1: "About us",
            to_1: "https://www.gojek.com/en-id/about",
            link_2: "Products",
            to_2: "/products",
            link_3: "Blog",
            to_3: "/blog",
        },
        {
            title: "Join with us",
            link_1: "Driver Partners",
            to_1: "https://www.gojek.com/en-id/driver",
            link_2: "Merchants Partners",
            to_2: "https://www.gojek.com/en-id/merchant",
        },
        {
            title: "Careers",
            link_1: "Student",
            to_1: "/careers",
            link_2: "Professional",
            to_2: "https://www.gojek.com/en-id/employee",
        },
        {
            title: "Get in touch",
            link_1: "Help Center",
            to_1: "/help",
            link_2: "Our Location",
            to_2: "https://www.gojek.com/en-id/our-location",
        }
    ];
    return (

        <div className="footer">
            <div className="container">
                <div className="footer__main">
                    <img src={Logo} alt="Gojek Logo" />
                    <div className="footer__main__item">
                        {data.map((x, y) => (
                            <ul className="footer__menu" key={y}>
                                <h4 className="footer__menu__title">{x.title}</h4>
                                <li className="footer__menu__item"><Link to={x.to_1} className="footer__menu__link">
                                    {x.link_1}
                                </Link></li>
                                <li className="footer__menu__item"><Link to={x.to_2} className="footer__menu__link">
                                    {x.link_2}
                                </Link></li>
                                {x.link_3 ? <li className="footer__menu__item"><Link to={x.to_3} className="footer__menu__link">
                                    {x.link_3}
                                </Link></li> : ""}
                            </ul>
                        ))}
                        <div className="footer__menu">
                            <h2 className="footer__menu__title">Connect with Us</h2>
                            <div className="footer__menu__item">
                                <Link to={"https://www.facebook.com/gojekindonesia?_rdc=1&_rdr"} className="footer__menu__item__link"><i className="fa-brands fa-facebook"></i></Link>
                                <Link to={"https://twitter.com/gojekindonesia"} className="footer__menu__item__link"><i className="fa-brands fa-twitter"></i></Link>
                                <Link to={"https://www.instagram.com/gojekindonesia/"} className="footer__menu__item__link"><i className="fa-brands fa-instagram"></i></Link>
                                <Link to={"https://www.youtube.com/channel/UCmlKSK0OKn_B3oPwElW4n5w"} className="footer__menu__item__link"><i className="fa-brands fa-youtube"></i></Link>
                            </div>
                            <h2 className="footer__menu__title">Download the app</h2>
                            <div className="footer__menu__item">
                                <Link to={"https://apps.apple.com/id/app/gojek/id944875099?af_force_deeplink=true&pid=Go-Jek_Web&is_retargeting=false&af_click_lookback=7d&utm_content=Apple_App_Store&utm_source=Go-Jek_Web&utm_medium=Button&af_adset=Apple_App_Store&af_ad=Apple_App_Store&utm_campaign=Website_Footer_Download_Button_Apple_App_Store&af_channel=Button&c=Website_Footer_Download_Button_Apple_App_Store"} className="footer__menu__item__link"><i className="fa-brands fa-google-play"></i></Link>
                                <Link to={"https://play.google.com/store/apps/details?id=com.gojek.app&af_force_deeplink=true&pid=Go-Jek_Web&is_retargeting=false&af_click_lookback=7d&utm_content=Play_Store_Android&utm_source=Go-Jek_Web&utm_medium=Button&af_adset=Play_Store_Android&af_ad=Play_Store_Android&utm_campaign=Website_Footer_Download_Button_Google_Play_Store&af_channel=Button&c=Website_Footer_Download_Button_Google_Play_Store"} className="footer__menu__item__link"><i className="fa-brands fa-apple"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="footer__copyright">
                        <span>© 2023 Gojek | Gojek is a trademark of PT GoTo Gojek Tokopedia Tbk. Registered in the Directorate General of Intellectual Property of the Republic Indonesia.</span>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Footer;