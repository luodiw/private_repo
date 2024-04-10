import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const space = [
  "software engineer",
  "design engineer",
  "researcher in AI, virtual reality and robotics, parallel computing, distributed systems",
];

function useWordCycle(words) {
    const [currentWord, setCurrentWord] = useState(
        words[Math.floor(Math.random() * words.length)]
    );
    const [usedWords, setUsedWords] = useState([currentWord]);

    const handleClick = () => {
        const availableWords = words.filter(word => !usedWords.includes(word));
        if (availableWords.length === 0) {
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

  const [currentSpace, handleSpaceClick] = useWordCycle(space);

  return (
    <div>
      <h2>Luodi Wang</h2>
      <p>
        I'm a {" "}
        <a class="clickable" id="corner" onClick={handleSpaceClick}>
          {currentSpace}
        </a>
        .
      </p>

      <p>
          I love building things and toys. 
          Toys that give me and others joy, fun, inspiration, creativity.

          I love moonshot projects. 
      </p>

      <p>
          And I believe that software can allow the world to equilibrate 
          at each iteration.
      </p>

      <p>
          I also focus on <i>human interface design</i> to give people
          an epic sense of possibility and a deep appreciation when
          visualizing transmitted stories.
      </p>

      <p>
        I'm currently a junior computer science and mathematics student at {" "}
        <a href="https://www.union.edu" className="clickable">
          Union College
        </a>{" "}
        in NY.
      </p>

      <p>
          Am now exploring and scaling the fields of Applied AI.
      </p>

      <p>
      </p>
    </div>
  );
}

export default Home;