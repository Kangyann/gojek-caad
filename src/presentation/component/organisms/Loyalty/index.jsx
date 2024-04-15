import Logo from "core/assets/images/base/home_spot.svg";
import Button from "presentation/component/atoms/Button";

const Loyalty = () => {
  const dataLoyalty = {
    title: "Gojek Loyalty Program",
    description: "Make more transactions, get more rewards!",
    image: Logo,
    to: "https://www.gojek.com/id-id",
    name: "View More",
  };
  return (
    <div className="section">
      <div className="container">
        <div className="section__banner">
          <img
            src={dataLoyalty.image}
            alt="Benefit Logo"
            width="545"
            height="409"
          />
          <div className="section__banner__text">
            <h3>{dataLoyalty.title}</h3>
            <span>{dataLoyalty.description}</span>
            <Button
              to={dataLoyalty.to}
              className={"button"}
              name={dataLoyalty.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Loyalty;
