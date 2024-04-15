import Template from "presentation/component/template";
import Post from "presentation/component/organisms/Post";

import Data from "./dataBlog";

const Blog = () => {
  return (
    <Template>
     <Post data={Data}/>
    </Template>
  );
};

export default Blog;
