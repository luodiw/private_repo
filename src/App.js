import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blogs";
import Projects from "./pages/Projects";
import Reading from "./pages/Reading";
import "./index.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import TagManager from "react-gtm-module";

//import custom font
import MyCustomFont from ".//fonts/BerkeleyMonoTrial-Regular.ttf";


const tagManagerArgs = {
  gtmId: "G-BR72D9JR60",
};
TagManager.initialize(tagManagerArgs);

function AppRoutes() {
  return (
    <>
      <div class="flex-container" id="outer" />
      <div class="flex-container" id="outer">
        <div class="flex-container" id="inner"></div>

        <div class="flex-container" id="inner">
          <div class="flex-container" id="nav_bar">
            <br />
            <NavBar></NavBar>
          </div>

          <div class="flex-container" id="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="blogs" element={<Blog/>} />
              <Route path="projects" element={<Projects />} />
            </Routes>

            <Footer />
          </div>
        </div>

        <div class="flex-container" id="inner" />
      </div>
      <div class="flex-container" id="outer" />
    </>
  );
}

function LogRoutes() {
  return (
    <div>
      <div class="flex-container" id="outer" />
      <div class="flex-container" id="outer">
        <div class="flex-container" id="inner"></div>

        <div class="flex-container" id="blog">
          <Routes>
            <Route path="/" element={<Reading />} />
          </Routes>
          <Footer />
        </div>
        <div class="flex-container" id="inner" />
      </div>
      <div class="flex-container" id="outer" />
    </div>
  );
}

function BlogRoutes() {
  return (
    <div>
      <div class="flex-container" id="outer" />
      <div class="flex-container" id="outer">
        <div class="flex-container" id="inner"></div>

        <div class="flex-container" id="blog">
          <Routes>
            <Route path="/" element={<Blog />} />
          </Routes>
          <Footer />
        </div>
        <div class="flex-container" id="inner" />
      </div>
      <div class="flex-container" id="outer" />
    </div>
  );
}

const fontStyles = `
    @font-face {
      font-family: 'My Custom Font';
      src: url(${MyCustomFont}) format('truetype');
      /* Additional font properties if needed */
    }
    
    body {
      font-family: 'My Custom Font', sans-serif;
    }
  `;

function App() {
  window.dataLayer.push({
    event: "pageview",
  });
  return (
    <div className="App">
      <meta charset="UTF-8"></meta>
      <link rel="stylesheet" href="static/source.css" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto+Mono"
      />
      {/*import font here?*/}

      <style>{fontStyles}</style>

      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
      />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
      />
      <Routes>
        <Route path="/*" element={<AppRoutes />} />
        <Route path="/reading/*" element={<LogRoutes />} />
        <Route path="/blogs/*" element={<BlogRoutes />} />
      </Routes>
    </div>
  );
}

export default App;