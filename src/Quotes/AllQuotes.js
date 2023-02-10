import Quote from "./quotes";
import { quotes } from "../data/data";

export default function AllQuotes() {
  return (
    <>
      <div>
        {quotes.map((c) => (
          <Quote {...c} />
        ))}
      </div>
    </>
  );
}


