const Headline = ({ children, ...otherData }) => {
  return (
    <>
      {children ? (
        children
      ) : (
        <div className="header">
          <div className="header__container">
            {otherData.video ? (
              <iframe
                title="Gojek - The Flow"
                src={otherData.video}
                allowfullscreen
              ></iframe>
            ) : (
              <img src={otherData.image} alt="header_background" />
            )}
            <div className="container">
              <div className="header__item">
                <div className="header__item__text">
                  <h1>{otherData.title}</h1>
                  <p>{otherData.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Headline;
