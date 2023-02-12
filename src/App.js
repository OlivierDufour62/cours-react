import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./MyNavBar/MyNavBar";
import AllQuotes from "./Quotes/AllQuotes";
import OneQuote from "./Quotes/OneQuote";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <MyNavBar>
        <Routes>
          <Route exact={true} path="/AllQuotes" element={<AllQuotes />} />
         
          <Route exact={true} path="/oneQuote" element={<OneQuote />} />
        </Routes>
      </MyNavBar>
    </>
  );
}

// function App() {
//   const [showAll, setShowAll] = useState(false);
//   return (
//     <div className="App">
//       <h1>Mes citations !</h1>
//       <button onClick={() => setShowAll(false)}>Unique</button>
//       <button onClick={() => setShowAll(true)}>Tout</button>
//       {/* <button onClick={() => removeQuote()}>Supprimer</button> */}
//       {showAll ? <AllQuotes /> : <OneQuote />}
//     </div>
//   );
// }
