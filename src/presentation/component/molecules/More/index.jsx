import Mores from "presentation/component/organisms/Mores";

const More = ({ ...otherData }) => {
  return (
    <>
      <div className="more">
        <div className="container">
          <h2>{otherData.title}</h2>
          <div className="more__inner">
            {otherData.data.map((x, y) => (
              <div className="more__menu" key={y}>
                <Mores {...x} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default More;
