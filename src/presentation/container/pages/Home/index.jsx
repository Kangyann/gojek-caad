import Scale from "presentation/component/organisms/Scale";
import Header from "presentation/component/organisms/Headline/index.jsx";
import Join from "presentation/component/organisms/Join";
import Loyalty from "presentation/component/organisms/Loyalty";
import Layout from "presentation/component/template/Layout/index.jsx";

import Data from "./dataScale.js";

const Home = () => {
  return (
    <Layout>
      <Header {...Data.Section} />
      <Scale
        title={"We scale like a dream"}
        data={Data.Scale}
        link={"https://www.gojek.io/careers"}
        className={"scale"}
      />
      <Loyalty />
      <Join />
    </Layout>
  );
};

export default Home;
