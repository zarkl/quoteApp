import React, { useState } from "react";
import "./styles.css";
import quotes from "./quote";
import Button from "./button";

export default function App() {
  const [current, setCurrent] = useState(0);

  const onForward = () => {
    if (current < quotes.length - 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
  };
  const onBackward = () => {
    if (current > 0) {
      setCurrent(current - 1);
    } else {
      setCurrent(quotes.length - 1);
    }
  };
  const onRandom = () => {
    //generate a random number between 0 and size of quotes array
    const ran = Math.floor(Math.random() * quotes.length);
    setCurrent(ran);
  };

  return (
    <div className="App">
      <h1 style={{ color: "blue", fontFamily: "monospace" }}>Quotes</h1>
      <img src={quotes[current].image} alt={quotes[current].author} />
      <p style={{ fontFamily: "Times" }}>{quotes[current].author}</p>
      <p className="content">{quotes[current].quote}</p>
      <Button onClick={onForward} name={"forward"} />
      <Button onClick={onBackward} name={"backwards"} />
      <Button onClick={onRandom} name={"random"} />
    </div>
  );
}
