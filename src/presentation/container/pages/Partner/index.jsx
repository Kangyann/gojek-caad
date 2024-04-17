import Header from "presentation/component/organisms/Headline";
import More from "presentation/component/molecules/More";
import Join from "presentation/component/organisms/Join";
import Layout from "presentation/component/template/Layout/index.jsx";

import Data from "./dataPartner";

const Partner = () => {
  return (
    <Layout>
      <Header {...Data.Header} />
      <More data={Data.More} title={"What's your forte ?"} />
      <Join />
    </Layout>
  );
};

export default Partner;
