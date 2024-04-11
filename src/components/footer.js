import "./footer.css";
// import Clock from "./clock";

function Footer() {
  return (
    <div>
      <hr class="dashed" />
      <p class="links">
        <a
          href="https://www.linkedin.com/in/luodiwang/"
          target="_blank"
          class="fa fa-linkedin fa-lg"
        ></a>
        <a
          href="https://github.com/luodiw"
          target="_blank"
          class="fa fa-github fa-lg"
        >
          {" "}
        </a>
        <a
          href="https://twitter.com/luodiwg"
          target="_blank"
          class="fa fa-twitter fa-lg"
        >
          {" "}
        </a>
        <a
           href= "mailto:lwang4319@gmail.com"
           target="_blank"
           // className="fa-solid fa-paper-plane"
           className="fa fa-paper-plane fa-sm"
          >
           {" "}
        </a>
        {"                                                                                    "}
        <span className="love-nyc">made with ❤️ in sf</span>
      </p>
    </div>
  );
}

export default Footer;
