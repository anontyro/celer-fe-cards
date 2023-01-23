import { useState } from "react";
import styles from "./HomePage.module.scss";
import { CardDeck } from "../../types/CardDeck";

const HomePage: React.FC = () => {
  const [currentDeck, setCurrentDeck] = useState<CardDeck | null>(null);
  return (
    <div className="App">
      <h1>test</h1>
    </div>
  );
};

export default HomePage;
