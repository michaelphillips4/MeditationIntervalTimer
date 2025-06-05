import Quote from "./Quote";

import data from "./quotes.json";

function RandomQuote() {
  const randomIndex = Math.floor(Math.random() * data.quotes.length);

  return (
    <Quote
      quote={data.quotes[randomIndex].quote}
      by={data.quotes[randomIndex].by}
    />
  );
}

export default RandomQuote;
