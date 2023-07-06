import { useEffect } from "react";
import BlogNavBar from "../components/blog_navbar";

function About() {
  useEffect(() => {
    document.title = "Luodi Wang - work footprints";
  }, []);

  return (
    <div>
      <div class="flex-container" id="blog_header_card">
        <h4 id="blog_header">my work footprints</h4>
        <BlogNavBar></BlogNavBar>
      </div>
      {/*<img src="/me.jpg" alt="it's me!" width="200" height="auto" />*/}
      {/*<p>*/}
      {/*  <nobr>─=≡Σ((( つ•̀ω•́)つLET’S GO!</nobr>*/}
      {/*</p>*/}

      {/*<hr class="dashed" />*/}

      {/*<p>*/}

      {/*  <br />*/}
      {/*  /!*  <h4>*!/*/}
      {/*  /!*      previously*!/*/}
      {/*  /!*  </h4>*!/*/}
      {/*  /!*<br />*!/*/}
      {/*  /!*i'm a serial hobby hopper, i dabble in the arts, i stay fit, and i'm*!/*/}
      {/*  /!*currently on the quest for a perfect cup of coffee. my existence in so*!/*/}
      {/*  /!*many things really helped shape the learner that i am today, and the one*!/*/}
      {/*  /!*i'll be tomorrow!*!/*/}
      {/*</p>*/}

      {/*<p> </p>*/}

      <p>
        <b>Currently</b>
      </p>
      <p>
          {/*<dl>*/}
          {/*    <dt> swe intern @Fidelity Investments </dt>*/}
          {/*    <dd> -working on the future of work. making AI/ML recommendation systems, APIs, ios & android dev</dd>*/}
          {/*</dl>*/}

          <ul>
              <dt> <li> swe intern @Fidelity Investments </li> </dt>
              <dd> working on the future of work. making AI/ML recommendation systems, APIs, ios & android dev </dd>
          </ul>
          {/*<b>swe intern @Fidelity Investments</b>*/}
          {/*{" "}*/}
          {/*<br />- working on the future of work. making AI/ML recommendation systems, APIs, ios & android dev*/}
        {/*i'm a 3rd year student at{" "}*/}
        {/*<a href="https://www.mcmaster.ca/" target="_blank" class="clickable">*/}
        {/*  McMaster University*/}
        {/*</a>*/}
        {/*, leading undergrad computing and engineering labs.*/}
        {/*<br />*/}
        {/*<br />*/}
        {/*i'm interested in accessibility, security, and all creative*/}
        {/*intersections of tech and art &#127912;.*/}
        {/*<br />*/}
        {/*<br />*/}
        {/*this summer i'll be working at{" "}*/}
        {/*<a href="https://about.google/" target="_blank" class="clickable">*/}
        {/*  Google*/}
        {/*</a>{" "}*/}
        {/*to make docs, sheets, and slides more accessible 🦯!*/}
        {/*<br />*/}
        {/*<br />*/}
        {/*if you're in nyc, let's grab a coffee together :)*/}
        {/*/!* <br /> *!/*/}
        {/*/!* no plans this summer yet, still looking for an internship that*/}
        {/*will help me grow and have an impact on something i care about! *!/*/}
      </p>

      <p> </p>

      <p>
        <b>Previously</b>
      </p>

      <p> internships and research: </p>
        <p>
            <ul>
                <dt> <li> computer vision intern @H10 AI {" "}
                    <a
                        href="https://h10ai.com/"
                        className="clickable"
                        target="_blank"
                    >
                        (h10 ai
                    </a>
                    )
                </li>
                </dt>
                <dd>- developed an adaptive gain-based visual servoing control law to the robot's
                    sensor accuracy drift in C++
                    - used {" "}
                    <a
                        href="https://visp-doc.inria.fr/doxygen/visp-3.3.0/index.html/"
                        className="clickable"
                        target="_blank"
                    >
                        VISP
                    </a>
                    to process images and calculate errors 
                    • made a GUI to show images from OpenCV with React
                </dd>
            </ul>
        </p>



      {/* <p>cs research:</p> */}
      <p>
          <ul>
              <dt> <li> summer research fellowship @Union College, ny {" "}
              <a
                  href="https://www.union.edu/news/stories/202207/summer-research-projects-2022"
                  className="clickable"
                  target="_blank"
              >
                  (research
              </a>
              )
              </li>
              </dt>
              <dd> wrote </dd>
          </ul>
      </p>

        <p>
            <ul>
                <dt> <li> cs research lab @Union College, ny {" "}
                    <a
                        href="https://www.union.edu/news/stories/202207/summer-research-projects-2022"
                        className="clickable"
                        target="_blank"
                    >
                        (research
                    </a>
                    )
                </li>
                </dt>
                <dd> wrote </dd>
            </ul>
        </p>

      {/* <ul>
        <li>
          wrote some NASA code for the Canadian Space Agency (
          <a
            href="https://github.com/nasa/cFS"
            class="clickable"
            target="_blank"
          >
            cFS
          </a>
          )
        </li>
        <li>
          worked on purolator's b2c shipping application as a pm (
          <a
            href="https://www.purolator.com/en/business-solutions/technology-solutions/track-manage-deliveries-receivers"
            class="clickable"
            target="_blank"
          >
            PYW
          </a>
          )
        </li>
        <li>
          wrote test suites for Equitable Bank's android app (
          <a
            href="https://apps.apple.com/ca/app/eq-bank-mobile-banking/id1039432211"
            class="clickable"
            target="_blank"
          >
            EQ Bank Mobile Banking
          </a>
          )
        </li>
      </ul> */}

      <p>hackathons:
        <ul>
        <li> 
           <a href="https://icpc.global/" 
            //  class="clickable italic" 
             target="_blank" 
             >
              IMC Prosperity
               </a>
               , placed top 5%/8,000 teams (March 2023)
          </li>

          <li>
             <a href="https://icpc.global/" 
            //  class="clickable italic" 
             target="_blank" 
             >
              ICPC Northeast North America Regional Contest
               </a>
               , placed 31/79 teams (February 2023)
               </li>

          <li>
          <a href="https://damo.alibaba.com/damo-academy-young-fellow/" 
            //  class="clickable italic" 
             target="_blank" 
             >
            Alibaba Global Math Competition DAMO Finalist 
          </a>
          (March 2020)
             </li>
        </ul>

      </p>  

      <p>outside of swe:
        <ul>
          <li>did dApps privacy research & growth @Oasis Protocol</li>
          <li>2x venture fellow</li>
          <li>acq. founder</li>
        </ul>
      </p>  
        
      {/*<ul>*/}
      {/*  <li>*/}
      {/*    wrote some satellite code for{" "}*/}
      {/*    <a*/}
      {/*      href="https://mcmasterneudose.ca/"*/}
      {/*      target="_blank"*/}
      {/*      class="clickable"*/}
      {/*    >*/}
      {/*      McMaster NEUDOSE*/}
      {/*    </a>*/}
      {/*  </li>*/}
      {/*  <li>*/}
      {/*    led the marketing team for the biggest design competition in 2021 with*/}
      {/*    the{" "}*/}
      {/*    <a*/}
      {/*      href="https://www.mcmasterdesignleague.com/"*/}
      {/*      class="clickable"*/}
      {/*      target="_blank"*/}
      {/*    >*/}
      {/*      McMaster Design League*/}
      {/*    </a>*/}
      {/*  </li>*/}
      {/*  <li>*/}
      {/*    curated the attendee experience for{" "}*/}
      {/*    <a href="https://deltahacks.com/" target="_blank" class="clickable">*/}
      {/*      Deltahacks*/}
      {/*    </a>*/}
      {/*  </li>*/}
      {/*</ul>*/}
    </div>
  );
}

export default About;
