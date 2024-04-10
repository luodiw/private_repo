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
        - built an efficient Discord bot template for deployment and workflow with Docker, Pipenv, and autoloading Cogs
        <br />
        - deployed across servers totalling to 2K people  
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
    </div>
  );
}

export default Projects;
