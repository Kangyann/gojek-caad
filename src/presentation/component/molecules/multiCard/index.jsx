const multiCard = ({...otherData }) => {
  return (
    <div className="multiCard">
      <div className="container">
        {otherData.data.map((x, y) => (
          <div className="multiCard__box" key={y}>
            <div className="multiCard__box__item">
              <div className="multiCard__box__item__image">
                <div className={x.className}>
                  {x.image.map((x, y) => (
                    <img src={x} alt="" key={y} />
                  ))}
                </div>
              </div>
              <div className="multiCard__box__item__text">
                <h3>{x.title}</h3>
                <p>{x.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default multiCard;
