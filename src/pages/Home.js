import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import BlogNavBar from "../components/blog_navbar";

const hobbies = [
  // "playing my ukulele",
  // "writing poetry on my substack",
  // "brewing coffee with my v60",
  // "cafe hopping around the city",
  // "pretending to be busy",
  // "walking through cities",
  // "smashing birdies on the court",
  // "shredding a mountain on my snowboard",
  // "playing pump it up",
  // "cooking mapo tofu",
  // "walking through art galleries",
  // "drafting up new songs",
  // "bar hopping through neighbourhoods",
  // "watching super smash bros melee",
  // "trying to get on top of another mountain",
  // "crafting a new spotify playlist",
];

const space = [
  "software engineer",
  "researcher in ML, virtual reality and robotics, parallel computing",
  "mobile developer",
  "product designer",
  // "",
  // "node",
  // "slice",
  // "shard",
  // "bit",
  // "piece",
  // "string",
];

// function useWordCycle(words) {
//   const [currentWord, setCurrentWord] = useState(
//     words[Math.floor(Math.random() * words.length)]
//   );
//
//   const handleClick = () => {
//     const currentIndex = words.indexOf(currentWord);
//     const nextIndex = (currentIndex + 1) % words.length;
//     setCurrentWord(words[nextIndex]);
//   };
//
//   return [currentWord, handleClick];
// }

function useWordCycle(words) {
    const [currentWord, setCurrentWord] = useState(
        words[Math.floor(Math.random() * words.length)]
    );
    const [usedWords, setUsedWords] = useState([currentWord]);

    const handleClick = () => {
        const availableWords = words.filter(word => !usedWords.includes(word));
        if (availableWords.length === 0) {
            // If all words have been used, reset the list
            setUsedWords([]);
            setCurrentWord(words[Math.floor(Math.random() * words.length)]);
        } else {
            const nextWord = availableWords[Math.floor(Math.random() * availableWords.length)];
            setUsedWords([...usedWords, nextWord]);
            setCurrentWord(nextWord);
        }
    };

    return [currentWord, handleClick];
}


function Home() {
  useEffect(() => {
    document.title = "Luodi Wang";
  }, []);

  const [currentHobby, handleHobbyClick] = useWordCycle(hobbies);
  const [currentSpace, handleSpaceClick] = useWordCycle(space);

  return (
    <div>
      {/* <div class="flex-container" id="blog_header_card">
        <h2 id="blog_header">Luodi Wang</h2>
        <BlogNavBar></BlogNavBar>
      </div> */}
      <h2>Luodi Wang</h2>
      <p>
        I'm a {" "}
        <a class="clickable" id="corner" onClick={handleSpaceClick}>
          {currentSpace}
        </a>
        .
      </p>
      <p>
        I'm a computer science and mathematics student at {" "}
        <a href="https://www.union.edu" className="clickable">
          Union College
        </a>{" "}
        {/*<a href="https://www.union.edu" className="clickable">*/}
        {/*  Union College*/}
        {/*</a>{" "}*/}
        in upstate ny.

        {/*/!*i'm a student based in Toronto &#127809; where i study software*!/*/}
        {/*/!*engineering. when i'm not breaking prod at google, i'm learning about*!/*/}
        {/*accessibility, reading manga, and{" "}*/}
        {/*<a class="clickable" id="hobbies" onClick={handleHobbyClick}>*/}
        {/*  {currentHobby}*/}
        {/*</a>*/}
        {/*.*/}
      </p>

      <p>
          I work on ambitious software to help people
          intuitively express their true inner freedom 
          by evoking their creativity & enhancing their 
          collaboration and efficiency.
      </p>

      <p>
          And I care deeply about <i>systems</i>,
          particularly <i>distributed systems</i>.
      </p>

      <p>
          I also focus on <i>human interface design</i> to give people
          an epic sense of possibility and a deep appreciation when
          visualizing the transmitted stories. To me, beauty matters. 
          Details matter.
      </p>

      <p>
          Am currently: developing turing complete apps, open sourcing the brain, defi remittances
      </p>

      <p>
        {" "}
        {/*<a href="mailto:lwang4319@gmail.com" class="clickable">*/}
        {/*  lwang4319@gmail.com*/}
        {/*</a>*/}
        {/*,*/}
        {/*<br />*/}
        {/*or ask{" "}*/}
        {/*<NavLink to="/quinn-ai" class="clickable">*/}
        {/*  <u>my ai</u>*/}
        {/*</NavLink>{" "}*/}
        {/*a question!*/}
      </p>
    </div>
  );
}

export default Home;
