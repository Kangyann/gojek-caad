const HelpHeadline = ({ title, image }) => {
  return (
    <>
      <div className="main help">
        <div className="help__header">
          <h2>{title}</h2>
          <div className="help__header__image">
            {image.map((x, y) => (
              <img src={x.src} alt="help_icon" key={y} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpHeadline;
