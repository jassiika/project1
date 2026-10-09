import React from "react";
import Card from "./Card";
import "./App.css";

const cardsData = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Card ${i + 1}`,
  description: `This is card ${i + 1} description`,
  image: `https://picsum.photos/seed/card${i + 1}/200`,
}));

function App() {
  return (
    <div className="app">
      <h2 className="heading">All the cards are here.</h2>
      <div className="grid">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;