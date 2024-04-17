import Topics from "presentation/component/organisms/Topics";
import ImageBg from "core/assets/images/base/help.png";
import Layout from "presentation/component/template/Layout";
import Headline from "presentation/component/organisms/Headline";
import HelpHeadline from "presentation/component/organisms/HelpHeadline";

const Company = () => {
  const image = [
    {
      src: ImageBg,
    },
    {
      src: ImageBg,
    },
  ];

  return (
    <Layout>
      <Headline>
        <HelpHeadline image={image} title={"Need some help ?"} />
      </Headline>
      <Topics />
    </Layout>
  );
};

export default Company;
