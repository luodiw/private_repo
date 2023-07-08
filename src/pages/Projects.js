import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Projects() {
  useEffect(() => {
    document.title = "Luodi Wang - Projects";
  }, []);

  return (
    <div>
      {/* <img src="/james_turrell_skyspace.jpg" alt="it's me!" width="200" height="auto" /> */}
      <p>
        {" "}
        {/*<a href="https://github.com/luodiw" class="clickable" target="_blank">*/}
        <a href="https://github.com/luodiw">
          [github]
        </a>{" "}
        {/*<nobr>(๑•̀ㅁ•́๑)✧</nobr>*/}
      </p>
      <hr class="dashed" />
    
      <p>
        <a
          href="https://github.com/luodiw/Notion-Task-Automator"
          class="clickable"
          target="_blank"
        >
          <b>Notion Task Automator</b>
        </a>{" "}
        <br />
        use voice commands to write, read what you want to add in Notion through the terminal!
      </p>

      <p>
        <a
          href="https://github.com/luodiw/Discord-Bot"
          class="clickable"
          target="_blank"
        >
          <b>Discord Bot Template</b>
        </a>{" "}
        <br />
        -built an efficient Discord bot template for deployment and workflow with Docker, Pipenv, and autoloading Cogs
        <br />
        -deployed across servers totalling to 2K people  
        (gpt addition incoming ;))
      </p>

      <p>
        <a
          href="https://github.com/luodiw/Instafarm-Web-Scrape"
          class="clickable"
          target="_blank"
        >
          <b>Instafarm Scraper</b>
        </a>{" "}
        <br />
        used SerpApi's Google Maps API and bs4 to make a categorized, comprehensive nation wide database 
        of your local, organic farms 
      </p>

      <p>
        <a
          href="https://github.com/luodiw/Hasherator"
          class="clickable"
          target="_blank"
        >
          <b>Hasherator</b>
        </a>{" "}
        <br />
        made a CLI that generates customized random hashes with Node.js 
      </p>

      <i>(work in progress, more projects incoming!)</i>

      {/* <p>
        <NavLink to="/quinn-ai" class="clickable">
          <u>
            <b>Discord Bot Template</b>
          </u>
        </NavLink>{" "}
        <br />
        built an efficient Discord bot template for deployment and workflow with Docker, Pipenv, and autoloading Cogs
        deployed across servers totallling to 2K people  
        (gpt addition incoming ;))
      </p>
      <p>
        <NavLink to="/" class="clickable">
          <u>
            <b>personal website</b>
          </u>
        </NavLink>{" "}
        <br />
        what you're looking at right now :)
      </p>
      
      <p>
        <a
          href="https://ridehome.netlify.app/"
          class="clickable"
          target="_blank"
        >
          <b>ridehome</b>
        </a>{" "}
        <br />
        ride the subway, from home
      </p>
      
      <p>
        <a
          href="https://github.com/quinnha/protein-monster-visualizer"
          class="clickable"
          target="_blank"
        >
          <b>pmv</b>
        </a>{" "}
        <br />a subdirectory visualizer for a weird website
      </p>
      <p>
        <a
          href="https://github.com/quinnha/RBS-interpreter"
          class="clickable"
          target="_blank"
        >
          <b>red belly snake interpreter</b>
        </a>{" "}
        <br />
        handmade python to assembly interpreter
      </p>
      <p>
        <a
          href="https://github.com/quinnha/Unlucky-Bot"
          class="clickable"
          target="_blank"
        >
          <b>steel unlucky bot</b>
        </a>{" "}
        <br />
        discord bot based off pro valorant player josh "steel" nissan
      </p>
      <p>
        <a
          href="https://github.com/quinnha/public-transit-network"
          class="clickable"
          target="_blank"
        >
          <b>public transit network calculator</b>
        </a>{" "}
        <br />
        shortest path calculator between stops on public transit networks
      </p>
      <p>
        <a
          href="https://github.com/quinnha/Pic-A-Friend"
          class="clickable"
          target="_blank"
        >
          <b>pic a friend</b>
        </a>{" "}
        <br />
        insert your missing friends into pictures with AR
      </p>

      <p>
        <i>(this page is a work in progress, pictures coming soon!)</i>
      </p> */}
    </div>
  );
}

export default Projects;
