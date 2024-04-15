import Topics from "presentation/component/organisms/Topics";
import ImageBg from "core/assets/images/base/help.png";
import Template from "presentation/component/template";
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
    <Template>
      <Headline>
        <HelpHeadline image={image} title={"Need some help ?"} />
      </Headline>
      <Topics />
    </Template>
  );
};

export default Company;
