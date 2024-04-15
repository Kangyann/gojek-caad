import Header from "presentation/component/organisms/Headline";
import More from "presentation/component/molecules/More";
import Join from "presentation/component/organisms/Join";
import Template from "presentation/component/template/index.jsx";

import Data from "./dataPartner";

const Partner = () => {
  return (
    <Template>
      <Header {...Data.Header} />
      <More data={Data.More} title={"What's your forte ?"} />
      <Join />
    </Template>
  );
};

export default Partner;
