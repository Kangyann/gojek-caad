import Header from "presentation/component/organisms/Headline";
import Scale from "presentation/component/organisms/Scale";
import Loyalty from "presentation/component/organisms/Loyalty";
import Template from "presentation/component/template";

import Data from "./dataCompany";

const Company = () => {
  return (
    <Template>
      <Header {...Data.Header} />
      <Scale
        title={"The three pillars of Gojek"}
        data={Data.Pillars}
        className={"pillars"}
      />
      <Loyalty />
    </Template>
  );
};

export default Company;
