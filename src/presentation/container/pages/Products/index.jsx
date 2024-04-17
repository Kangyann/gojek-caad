import Header from "presentation/component/organisms/Headline";
import Loyalty from "presentation/component/organisms/Loyalty";
import Card from "presentation/component/molecules/multiCard";
import Layout from "presentation/component/template/Layout";
import Knowmore from "presentation/component/organisms/Knowmore";

import Data from "./dataProducts";

const Products = () => {
  return (
    <Layout>
      <Header {...Data.Header} />
      <Card data={Data.Card} />
      <Loyalty />
      <Knowmore image={Data.Header.bg_1} data={Data.More[0].food} />
      <Knowmore image={Data.Header.bg_2} data={Data.More[0].business} />
    </Layout>
  );
};

export default Products;
