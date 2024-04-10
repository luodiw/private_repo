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
      <img src="/james_turrell_skyspace.jpg" alt="it's me!" width="200" height="auto" />

      <p>
        follow my journeys on{" "}
        <a href="https://curius.app/luodi-wang" target="_blank">
           <u>curius</u>
        </a>{" "}
      </p>
      <p>
          <b><h5> currently reading </h5> </b>
      </p>
      <p>
          <ul>
              <li> <i> Just for Fun </i>- Linus Torvalds</li>
              <li> (diving deep into sci-fi currently)</li>

          </ul>
      </p>
      <p />

      <p>
          <b><h5> books I read over and over again </h5> </b>
          <ul>
              <li> <i> Meditations </i>- Marcus Aurelius</li>
              <li> <i> The Lion Tracker's Guide to Life </i>- Boyd Varty</li>
              {/* <li> <i> High Growth Handbook </i>- Elad Gil</li> */}
              <li> <i> Can't Hurt Me </i>- David Goggins</li>
              <li> <i> The Compound Effect </i>- Darren Hardy</li>
              <li> <i> The Infinite Machine </i>- Camila Russo</li>
              <li> <i> Aiming High A Biography of Masa Son </i>- Atsuo Inoue</li>
              {/* <li> <i> Love Yourself Like Your Life Depends on It </i>- Kamal Ravikant</li> */}
              <li> <i> After Steve </i>- Tripp Mickle</li>
              <li><i> Zero to One </i>- Peter Thiel </li>
              {/* <li><i> Be Here Now </i>- Ram Dass</li> */}
              <li><i> The Almananck of Naval Ravikant </i></li>
              <li><i> Business Adventures </i>- John Brooks </li>
              {/* <li><i> Skin in the Game </i>- Nassim Nicholas Taleb </li> */}
              <li><i> Infinite Powers</i>- Steven Strogatz</li>
              <li><i> Twelve Against Gods </i>- William Bolitho</li>
              <li><i> Amp It Up </i>- Frank Slootman </li>
          </ul>
      </p>
    </div>
  );
}

export default Reading;
