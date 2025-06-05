import "./Quote.css";

interface quoteProps {
  quote: string;
  by: string;
}

function Quote({ quote, by }: quoteProps) {
  return (
    <div className="quote">
      <blockquote id="quote">{quote}</blockquote>
      <span className="center">
        <cite id="author">{by}</cite>
      </span>
    </div>
  );
}

export default Quote;
