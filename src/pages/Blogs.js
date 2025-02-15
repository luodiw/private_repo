import { useEffect } from "react";
// import AboutNavBar from "../components/blog_navbar";
import BlogNavBar from "../components/blog_navbar";


function Blog() {
  useEffect(() => {
    document.title = "Blogs";
  }, []);

  return (
    <div>
      <div class="flex-container" id="blog_header_card">
        <h4 id="blog_header">Blogs</h4>
        <BlogNavBar></BlogNavBar>
      </div>

    </div>
  );
}

export default Blog;
