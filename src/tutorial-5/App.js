import { React, useState } from "react";
import EmptyBlock from "./components/EmptyBlock";
import Phrase from "./components/Phrase";
import { nounsArr, adjectivesArr } from "./components/data";
import "./App.css";

function App() {
  const [phrases, setPhrases] = useState([]);

  const nounsLength = nounsArr.length;
  const adjectivesLength = adjectivesArr.length;

  const generatePhrase = () => {
    let newPhrase = `${
      adjectivesArr[Math.floor(Math.random() * adjectivesLength)]
    } ${adjectivesArr[Math.floor(Math.random() * adjectivesLength)]} ${
      nounsArr[Math.floor(Math.random() * nounsLength)]
    }`;
    setPhrases([...phrases, newPhrase]);
  };

  const Phrases = () => {
    const keyGen = (pre) => `${pre}_{new Date().getTime()}`;
    // использовал тут такой ключ потому что использовать сами фразы не могу
    return (
      <div className="list">
        {phrases.map((el) => (
          <Phrase key={keyGen(el)} text={el} />
        ))}
      </div>
    );
  };

  return (
    <div className="wrapper">
      {phrases.length ? <Phrases /> : <EmptyBlock />}
      <button className="btn btn_generate" onClick={generatePhrase}>
        Сгенерировать
      </button>
      <button className="btn btn_clear" onClick={() => setPhrases([])}>
        Очистить
      </button>
    </div>
  );
}

export default App;
