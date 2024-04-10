import { useEffect } from "react";
import AboutNavBar from "../components/blog_navbar";


function About() {
  useEffect(() => {
    document.title = "Blogs";
  }, []);

  return (
    <div>
      <div class="flex-container" id="blog_header_card">
        <h4 id="blog_header">blog</h4>
        <AboutNavBar></AboutNavBar>
      </div>

      <p> </p>

      <p>
        <b>[Previously]</b>
      </p>

      <p> internships and research: </p>

      <p>
          <ul>
              <li> swe intern @Fidelity Investments
              {/* <a
                  href="https://www.union.edu/news/stories/202207/summer-research-projects-2022"
                  className="clickable"
                  target="_blank"
              >
                  (research
              </a>
              ) */}
              </li>
              - worked on future of work. 
              - backend, deep learning recommendation engine + iOS development
          </ul>
      </p>


      <p>
          <ul>
              <li> summer research fellowship @Union College, ny {" "}
              <a
                  href="https://www.union.edu/news/stories/202207/summer-research-projects-2022"
                  className="clickable"
                  target="_blank"
              >
                  (research
              </a>
              )
              </li>
              - worked on virtual reality robot control system and 
              coded an integration the robot's 3D model/mesh environment to VR 
          </ul>
      </p>

        <p>
            <ul>
               <li> computer vision intern @H10 AI {" "}
                    <a
                        href="https://h10ai.com/"
                        className="clickable"
                        target="_blank"
                    >
                        (h10 ai
                    </a>
                    )
                </li>
                - wrote code for using machine vision to control robots & made GUIs
                {/* <br>wrote code for using machine vision to control robots & made GUIs</br> */}
            </ul>
        </p>

        <p>
            <ul>
               <li> swe intern @Creatiers on DeSo Protocol {" "}
                    <a
                        href="https://twitter.com/creatiers/"
                        className="clickable"
                        target="_blank"
                    >
                        (creatiers
                    </a>
                    )
                </li>
                - shipped real time chat application and embedded DeSo Api's
                {/* <br>wrote code for using machine vision to control robots & made GUIs</br> */}
            </ul>
        </p>


        <p>
            <ul>
               <li> cs research lab @Union College, ny
                    {/* <a
                        href="https://h10ai.com/"
                        className="clickable"
                        target="_blank"
                    >
                        (h10 ai
                    </a> */}
                    {/* ) */}
                </li>
                - did parallelization to Cohn-Umans framework for making matrix multiplication faster!
                {/* <br>wrote code for using machine vision to control robots & made GUIs</br> */}
            </ul>
        </p>

        {/* <p><i>(i've also done ml data analysis on economic data & lots of frontend work in the past)</i></p> */}


        {/* <p>
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
        </p> */}

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

      <p>[hackathons]:
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
            Alibaba Global Math Competition DAMO Finalist {" "}
          </a>
          (March 2020)
             </li>
        </ul>

      </p>  

      <p>outside of swe:
        <ul>
          <li>did dApps privacy research & growth @
          <a href="https://oasisprotocol.org/" 
            class = "clickable"
             target="_blank" 
             >
            Oasis Protocol 
          </a>
          </li>
          <li>2x venture fellow</li>
          <li>acq. founder (venture backed)</li>
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
