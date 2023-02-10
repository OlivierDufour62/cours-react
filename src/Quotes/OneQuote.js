import { useState } from "react";
import Quote from "./quotes";
import { quotes, removeQuote } from "../data/data";

export default function OneQuote() {
  const [currIndex, setCurrIndex] = useState(0);
  const currentQuote = quotes[currIndex];
  const jsxQuote = (
    <Quote
      id={currentQuote.id}
      text={currentQuote.text}
      author={currentQuote.author}
    />
  );

  function handleClick(a) {
    if (a == "suivant") {
      currIndex == quotes.length - 1 ? setCurrIndex(0) : setCurrIndex(currIndex + 1);
    } else {
      currIndex == 0 ? setCurrIndex(quotes.length - 1) : setCurrIndex(currIndex - 1);
    }
  }

  function deleteCurrentQuote(){
    quotes.filter(function(allIndex){
        if(allIndex.id == currIndex){
            quotes.splice(currIndex,1);
        }
    })
    setCurrIndex((currIndex + quotes.length - 1) % quotes.length);
}
  return (
    <div className="App">
      {jsxQuote}
      <button onClick={() => handleClick(1)}>suivant</button>
      <button onClick={() => handleClick(-1)}>precedent</button>
      <button onClick={() => removeQuote()}>supprimer</button>
    </div>
  );
}
