import Layout from "presentation/component/template/Layout";
import Post from "presentation/component/organisms/Post";

import Data from "./dataBlog";

const Blog = () => {
  return (
    <Layout>
      <Post data={Data} />
    </Layout>
  );
};

export default Blog;
