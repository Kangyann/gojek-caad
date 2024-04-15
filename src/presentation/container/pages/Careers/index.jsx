import Header from "presentation/component/organisms/Headline";
import More from "presentation/component/molecules/More";
import Join from "presentation/component/organisms/Join";
import Template from "presentation/component/template/index.jsx";

import Data from "./dataCareers";

const Careers = () => {
  return (
    <Template>
      <Header {...Data.Header} />
      <More data={Data.More} title={"What drives you ?"} />
      <Join />
    </Template>
  );
};

export default Careers;
