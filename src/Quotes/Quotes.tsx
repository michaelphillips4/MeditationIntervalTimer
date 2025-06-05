
import Quote from "./Quote";
import data from "./quotes.json";

const Quotes = () => {

  return (
  
      <main>
        <h2 className="center">Quotes</h2>
        <ol>
          {data.quotes.map((q, index) => (
            <li key={index} >
              <Quote quote={q.quote} by={q.by} />
            </li>
          ))}
        </ol>

      </main>

  );
};

export default Quotes;
