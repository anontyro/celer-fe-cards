import style from "./DeckCardBack.module.scss";

const DeckCardBack: React.FC = () => {
  return (
    <div className={style.cardBackContainer}>
      <div className={style.cardBackInnerContainer}></div>
    </div>
  );
};

export default DeckCardBack;
