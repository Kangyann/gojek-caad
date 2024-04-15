import Mores from "presentation/component/organisms/Mores";

const Knowmore = ({...otherData}) => {
  const data = otherData.data[0],
  image = otherData.image
  return (
    <>
      <div className="more" id={data.className}>
        <div className="more__image">
          <img src={image} alt="header_background_1" />
        </div>
        <div className="container">
          <div className={data.className}>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <div className="more__inner">
              {data.content.map((x, y) => (
                <div className={`more__menu ${data.className}__menu__item`} key={y}>
                  <Mores
                    image={x.image}
                    description={x.description}
                    button={true}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Knowmore;