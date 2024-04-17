
import Button from "presentation/component/atoms/Button";
import Card from "presentation/component/molecules/Card";

const Scale = ({ title, link, ...otherData }) => {
  return (
    <div className={otherData.className}>
      <div className="container">
        <div className={otherData.className + "__heading"}>
          <h2>{title}</h2>
          {link ? (
            <Button to={link} className={"button"} name={"Scale with us"}/>
          ) : (
            ""
          )}
        </div>
        <div className="card">
          <div className="card__box">
            {otherData.data.map((val, idx) => (
              <Card
                main_text={val.title}
                sub_text={val.description}
                image={val.image}
                key={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scale;
