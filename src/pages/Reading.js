import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import BlogNavBar from "../components/blog_navbar";

function Reading() {
  useEffect(() => {
    document.title = "Luodi Wang - Reading";
  }, []);

  return (
    <div>
      <div class="flex-container" id="blog_header_card">
        <h4 id="blog_header">what I'm reading now</h4>
        <BlogNavBar></BlogNavBar>
      </div>
      <img src="/james_turrell_skyspace.jpg" alt="deep thoughts" width="200" height="auto" />

      <p>
        my {" "}
        <a href="https://curius.app/luodi-wang" target="_blank">
           <u>curius</u>
        </a>{" "}
      </p>
      <p />

      <p>
          <b><h5> books I live by</h5> </b>
          <ul>
              <li> Zero: The Biography of a Dangerous Idea</li>
              <li> Infinite Powers</li>
              <li> Wanting: The Power of Mimetic Desire in Everyday Life</li>
              <li> Can&apos;t Hurt Me</li>
              <li> Make Something Wonderful</li>
          </ul>
      </p>
    </div>
  );
}

export default Reading;
