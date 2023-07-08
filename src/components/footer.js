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
           href= "mailto:lwang1289@gmail.com"
           target="_blank"
           // className="fa-solid fa-paper-plane"
           className="fa fa-paper-plane fa-sm"
          >
           {" "}
        </a>
        {"     "}
        <span className="love-nyc">made with ❤️ in nyc & sf</span>
        {/* add a footer, made with love in nyc}
        add time.js to this file

          {/*<i className="fa-solid fa-paper-plane"></i>*/}
        {/*<a*/}
        {/*  href="https://www.instagram.com/qh.music/"*/}
        {/*  target="_blank"*/}
        {/*  class="fa fa-instagram fa-lg"*/}
        {/*>*/}
        {/*  {" "}*/}
        {/*</a>*/}
        {/*<a*/}
        {/*  href="https://sesamebagel.substack.com/"*/}
        {/*  target="_blank"*/}
        {/*  class="fa fa-bookmark fa-lg"*/}
        {/*>*/}
        {/*  {" "}*/}
        {/*</a>*/}
        {/*<a*/}
        {/*  href="https://bento.me/quinnha"*/}
        {/*  target="_blank"*/}
        {/*  class="	fa fa-caret-square-o-down fa-lg"*/}
        {/*>*/}
        {/*  {""}*/}
        {/*</a>*/}
      </p>


      {/* <p class="credit_p">
        inspired by{" "}
        <a
          href="https://www.tiffanywang.me/"
          target="_blank"
          class="credit"
        >
          tiffany
        </a>
      </p> */}
      {/* <Clock /> */}
    </div>
  );
}

export default Footer;
