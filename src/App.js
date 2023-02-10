import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./MyNavBar/MyNavBar";
import AllQuotes from "./Quotes/AllQuotes";
import OneQuote from "./Quotes/OneQuote";

export default function App() {
  return (
    <>
      <MyNavBar>
        <Routes>
          <Route exact={true} path="/allQuotes" element={<AllQuotes />} />
          <Route exact={true} path="/oneQuote" element={<OneQuote />} />
        </Routes>
      </MyNavBar>
    </>
  );
}