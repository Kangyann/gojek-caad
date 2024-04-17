import Header from "presentation/component/organisms/Headline";
import Scale from "presentation/component/organisms/Scale";
import Loyalty from "presentation/component/organisms/Loyalty";
import Layout from "presentation/component/template/Layout";

import Data from "./dataCompany";

const Company = () => {
  return (
    <Layout>
      <Header {...Data.Header} />
      <Scale
        title={"The three pillars of Gojek"}
        data={Data.Pillars}
        className={"pillars"}
      />
      <Loyalty />
    </Layout>
  );
};

export default Company;
