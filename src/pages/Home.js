import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// const space = [
//   "software engineer",
//   "design engineer",
//   "researcher in AI, virtual reality and robotics, parallel computing, distributed systems",
// ];

// function useWordCycle(words) {
//     const [currentWord, setCurrentWord] = useState(
//         words[Math.floor(Math.random() * words.length)]
//     );
//     const [usedWords, setUsedWords] = useState([currentWord]);

//     const handleClick = () => {
//         const availableWords = words.filter(word => !usedWords.includes(word));
//         if (availableWords.length === 0) {
//             setUsedWords([]);
//             setCurrentWord(words[Math.floor(Math.random() * words.length)]);
//         } else {
//             const nextWord = availableWords[Math.floor(Math.random() * availableWords.length)];
//             setUsedWords([...usedWords, nextWord]);
//             setCurrentWord(nextWord);
//         }
//     };
//     return [currentWord, handleClick];
// }


function Home() {
  useEffect(() => {
    document.title = "Luodi Wang";
  }, []);

  // const [currentSpace, handleSpaceClick] = useWordCycle(space);

  return (
    <div>
      <h2>Luodi Wang</h2>
      <p>
        I'm a software engineer, design engineer, and a researcher focusing on AI, 
        virtual reality and robotics, distributed systems.
        {/* <a class="clickable" id="corner" onClick={handleSpaceClick}>
          {currentSpace}
        </a> */}
      </p>

      <p>
          In the past, I've worked at {" "}
        <a href="https://www.joinable.us/" className="clickable" target="_blank">
          Joinable
        </a>,
        <a href="https://www.fidelity.com/" className="clickable" target="_blank">
          Fidelity Investments
        </a>,
        <a href="https://www.h10ai.com" className="clickable" target="_blank">
          H10 AI
        </a>,
        Creatiers,
        <a href="https://oasisprotocol.org/" className="clickable" target="_blank">
        Oasis Network
        </a>,
        and I've also founded and sold a few startups.
          
          I love building things and toys that give me and others joy, fun, inspiration, creativity. Beyond engineering, 
          I also make run, moutain bike, play lots of poker, and make art.
      </p>

      <p>
        I'm currently pursuing a bachelors of science in computer science and a minor in math at {" "}
        <a href="https://www.union.edu" className="clickable" target="_blank">
          Union College
        </a>{" "}
        in NY.
      </p>

      <p>
          I'm now exploring and building Applied AI tools for enterprise.
      </p>

      <p>
      </p>
    </div>
  );
}

export default Home;