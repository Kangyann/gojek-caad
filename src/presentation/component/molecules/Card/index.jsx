const Card = ({ main_text, sub_text, image, key }) => {
    return (
        <li className="card__box__item" key={key}>
            <img src={image} alt="Logo" />
            <div className="card__box__item__text">
                <h3>{main_text}</h3>
                <p>{sub_text}</p>
            </div>
        </li>
    );
};

export default Card;
