import Button from "presentation/component/atoms/Button";

const More = ({ ...otherData }) => {
  return (
    <>
      <div className="more__menu__text">
        {otherData.image ? (
          <img src={otherData.image} alt="Gojek" />
        ) : (
          <h2>{otherData.title}</h2>
        )}
        <p>{otherData.description}</p>
      </div>
      {otherData.button !== true ? (
        <Button to={otherData.link} className={"button"} name={otherData.button} />
      ) : (
        <>
        <Button
          to={otherData.link}
          className="more__button__arrow"
          name={"Know More"}
        >
          <i className="pi pi-arrow-right"></i>
        </Button>
        </>
      )}
    </>
  );
};
export default More;
