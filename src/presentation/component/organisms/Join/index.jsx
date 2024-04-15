import join_1 from "core/assets/images/base/join_1.svg";
import join_2 from "core/assets/images/base/join_2.svg";
import join_3 from "core/assets/images/base/join_3.svg";
import Button from "presentation/component/atoms/Button";
const Benefit = () => {
  const data = [
    {
      title: "Employees",
      description:
        "Behind Southeast Asia's only hyper-growth startup are some billion-dollar brains, doing what the do best.",
      image: join_1,
      link: "Join as employee",
      to: "#",
    },
    {
      title: "Driver partners",
      description:
        "We're home to 2 million+ driver partners, who enjoy a bundle of health and financial benefits.",
      image: join_2,
      link: "Join as a driver partner",
      to: "#",
    },
    {
      title: "Merchants",
      description:
        "We empower 500,000+ merchants with cutting-edge technologies that help them multiply reach and sales",
      image: join_3,
      link: "Join as a merchant",
      to: "#",
    },
  ];
  return (
    <div className="join">
      <div className="container">
        <h2>Join the ride</h2>
        <ul className="join__menu">
          {data.map((val, idx) => (
            <li className="join__menu__item" key={`hm-${idx}`}>
              <img src={val.image} alt="Logo" />
              <div className="join__menu__item__text">
                <h3>{val.title}</h3>
                <span>{val.description}</span>
                <Button to={val.to} className={"button"} name={val.link} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Benefit;
