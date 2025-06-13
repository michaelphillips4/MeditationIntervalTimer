
import Quote from "../Quotes/Quote";
import data from "../Quotes/quotes.json";

const Quotes = () => {

  return (
  
      <>
        <h2 className="center">Quotes</h2>
        <ol className="unstyled-list">
          {data.quotes.map((q, index) => (
            <li key={index} >
              <Quote quote={q.quote} by={q.by} />
            </li>
          ))}
        </ol>

      </>

  );
};

export default Quotes;
