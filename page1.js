import AllQuotes from './Quotes/AllQuotes.js';
import { useState } from "react";
import OneQuote from './Quotes/OneQuote.js';
import './App.css';

function App() {
    const [showAll, setShowAll] = useState(false);
    return (
        <div className="App">
            <h1>
                Mes citations !
            </h1>
            <button onClick={() => setShowAll(false)}>Unique</button>
            <button onClick={() => setShowAll(true)}>Tout</button>
            {/* <button onClick={() => removeQuote()}>Supprimer</button> */}
            {showAll ? <AllQuotes /> : <OneQuote />}
        </div>
    );
}



export default App;