import Layout from "presentation/component/template/Layout";
import Image from "core/assets/images/base/notfound.webp";
import Button from "presentation/component/atoms/Button";

const NotFound = () => {
  const data = {
    image: Image,
    title: "Oops! Page is unavailable :(",
    description: "But don't be sad #ThereIsAlwaysAWay for you!",
    link: "https://www.gojek.com/",
  };
  return (
    <Layout>
      <div className="container">
        <div className="notfound">
          <div className="notfound__image">
            <img src={data.image} alt="Notfound_Image" />
          </div>
          <div className="notfound__text">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <Button name={"Back to homepage"} link={data.link} className={"button"} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
