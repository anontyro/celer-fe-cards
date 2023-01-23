import { useAtom } from "jotai";
import { informationAtom } from "../../atoms/informative";
import InfoBanner from "../../components/Banners/InfoBanner";

import styles from "./HomePage.module.scss";
import UsersCards from "./components/UsersCards/UsersCards";
import DeckControls from "./components/DeckControls/DeckControls";
import CurrentDeck from "./components/CurrentDeck/CurrentDeck";

const HomePage: React.FC = () => {
  const [info] = useAtom(informationAtom);

  return (
    <div className={styles.pageContainer}>
      <header>
        <InfoBanner message={info.message} />
      </header>
      <main>
        <CurrentDeck />
        <DeckControls />
        <UsersCards />
      </main>
    </div>
  );
};

export default HomePage;
