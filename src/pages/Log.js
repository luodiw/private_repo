import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import BlogNavBar from "../components/blog_navbar";

function Log() {
  useEffect(() => {
    document.title = "Luodi Wang - Reading";
  }, []);

  return (
    <div>
      <img src="/james_turrell_skyspace.jpg" alt="it's me!" width="200" height="auto" />
      <div class="flex-container" id="blog_header_card">
        <h4 id="blog_header">what I'm reading now</h4>
        <BlogNavBar></BlogNavBar>
      </div>

      <p>
        follow my journeys on{" "}
        <a href="https://curius.app/luodi-wang" target="_blank">
           <u>curius</u>
        </a>{" "}

        {/*  */}
        {/*<NavLink to="/blogs" class="clickable">*/}
        {/*  <u>curius</u>*/}
        {/*</NavLink>{" "}*/}
      </p>
      {/*<hr class="dashed"></hr>*/}
      <p>
          <b><h5> currently reading </h5> </b>
      </p>
      <p>
          <ul>
              <li> <i> Just for Fun </i>- Linus Torvalds</li>
              <li> <i> The Kill Chain Defending America in the Future of High-Tech Warfare</i>- Christian Brose</li>
              <li><i> Dune </i>- Frank Herbert</li>
              <li><i> The Alignment Problem </i>- Brian Christian</li>

          </ul>
        {/*<br />- signed an offer with google for the summer! <br /> -{" "}*/}
        {/*<NavLink to="/blogs/quinn-ai" class="clickable">*/}
        {/*  <u>[blog]</u>*/}
        {/*</NavLink>{" "}*/}
        {/*added{" "}*/}
        {/*<NavLink to="/quinn-ai" class="clickable">*/}
        {/*  <u>quinn ai</u>*/}
        {/*</NavLink>{" "}*/}
        {/*to the website*/}
      </p>
      <p />

      <p>
          <b><h5> books I read over and over again </h5> </b>
          <ul>
              <li> <i> Meditations </i>- Marcus Aurelius</li>
              <li> <i> The Lion Tracker's Guide to Life </i>- Boyd Varty</li>
              <li> <i> High Growth Handbook </i>- Elad Gil</li>
              <li> <i> Can't Hurt Me </i>- David Goggins</li>
              <li> <i> The Compound Effect </i>- Darren Hardy</li>
              <li> <i> The Infinite Machine </i>- Camila Russo</li>
              <li> <i> Aiming High A Biography of Masa Son </i>- Atsuo Inoue</li>
              <li> <i> Love Yourself Like Your Life Depends on It </i>- Kamal Ravikant</li>
              <li> <i> After Steve </i>- Tripp Mickle</li>
              <li><i> Zero to One </i>- Peter Thiel </li>
              <li><i> Be Here Now </i>- Ram Dass</li>
              <li><i> The Almananck of Naval Ravikant </i></li>
              <li><i> Business Adventures </i>- John Brooks </li>
              <li><i> Skin in the Game </i>- Nassim Nicholas Taleb </li>
              <li><i> Infinite Powers</i>- Steven Strogatz</li>
              <li><i> Twelve Against Gods </i>- William Bolitho</li>
              <li><i> Amp It Up </i>- Frank Slootman </li>
          </ul>
      </p>
      {/*<p>*/}
      {/*  <b>Feb 2023</b>*/}
      {/*  <br />- created this website!*/}
      {/*</p>*/}
      {/*<p />*/}
      {/*<p>*/}
      {/*  <b>Jul 2022</b>*/}
      {/*  <br />- biked my first century mile with the same{" "}*/}
      {/*  <a*/}
      {/*    href="https://drive.google.com/file/d/1dPwGpZJknoUPU1Zs1dpznACSvXc1Gi3X/view?usp=sharing"*/}
      {/*    class="clickable"*/}
      {/*    target="_blank"*/}
      {/*  >*/}
      {/*    {" "}*/}
      {/*    friends*/}
      {/*  </a>{" "}*/}
      {/*  (toronto -> niagara falls)*/}
      {/*</p>*/}
      {/*<p />*/}
      {/*<p>*/}
      {/*  <b>June 2022</b>*/}
      {/*  <br />- biked 75km for brain health with my{" "}*/}
      {/*  <a*/}
      {/*    href="https://drive.google.com/file/d/1rkkK23D3LUkAjelRNXAt44An62fTy8Yo/view?usp=sharing"*/}
      {/*    class="clickable"*/}
      {/*    target="_blank"*/}
      {/*  >*/}
      {/*    {" "}*/}
      {/*    friends*/}
      {/*  </a>{" "}*/}
      {/*  <a*/}
      {/*    href="https://drive.google.com/file/d/1G2brPXKw2-oQ23RAYhRiQN0tVGwJKypH/view?usp=sharing"*/}
      {/*    class="clickable"*/}
      {/*    target="_blank"*/}
      {/*  >*/}
      {/*    (i ate a banana on a highway) <br />*/}
      {/*  </a>{" "}*/}
      {/*  - went to{" "}*/}
      {/*  <a*/}
      {/*    href="https://drive.google.com/file/d/1hVKzTT2HGtg2N3miy8BPZ9QZRvV3iY3N/view?usp=sharing"*/}
      {/*    class="clickable"*/}
      {/*    target="_blank"*/}
      {/*  >*/}
      {/*    vancouver*/}
      {/*  </a>*/}
      {/*  !*/}
      {/*</p>*/}
      {/*<p />*/}
      {/*<p>*/}
      {/*  <b>May 2022</b>*/}
      {/*  <br />- started my first pm internship with purolator!*/}
      {/*</p>*/}
      {/*<p>*/}
      {/*  <p />*/}
      {/*  <b> Feb 2022</b>*/}
      {/*  <br />- snowboarded the{" "}*/}
      {/*  <a*/}
      {/*    href="https://drive.google.com/file/d/1M3RcbdvrYDcF3NRVY9fixUQB-8SQcdWJ/view?usp=sharing"*/}
      {/*    class="clickable"*/}
      {/*    target="_blank"*/}
      {/*  >*/}
      {/*    west coast*/}
      {/*  </a>{" "}*/}
      {/*  for the first time*/}
      {/*</p>*/}
      {/*<p>*/}
      {/*  <p />*/}
      {/*  <b> Aug 2021</b>*/}
      {/*  <br />- hiked{" "}*/}
      {/*  <a*/}
      {/*    href="https://drive.google.com/file/d/10h2fZjXDGq4VY4UQ7ppgTgjP2peW4x-_/view?usp=sharing"*/}
      {/*    class="clickable"*/}
      {/*    target="_blank"*/}
      {/*  >*/}
      {/*    lake garibaldi*/}
      {/*  </a>{" "}*/}
      {/*  (first big hike)*/}
      {/*</p>*/}
      {/*<p />*/}
      {/*<p>*/}
      {/*  <b>May 2021</b>*/}
      {/*  <br />- started my internship with the canadian space agency!*/}
      {/*</p>*/}
      {/*<p />*/}
      {/*<p>*/}
      {/*  <b>Sept 2020</b>*/}
      {/*  <br />- transferred into software engineering*/}
      {/*</p>*/}
      {/*<p />*/}
      {/*<p>*/}
      {/*  <b>Nov 2019</b>*/}
      {/*  <br />- went to my first concert (brockhampton)*/}
      {/*</p>*/}
      {/*<p />*/}
      {/*<p>*/}
      {/*  <b>Sept 2019</b>*/}
      {/*  <br />- started studying at mcmaster u*/}
      {/*</p>*/}
    </div>
  );
}

export default Log;
