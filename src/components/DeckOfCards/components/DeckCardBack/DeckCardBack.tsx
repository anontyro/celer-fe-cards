import style from "./DeckCardBack.module.scss";

type DeckCardBackProps = {
  onClick?: () => void;
};

const DeckCardBack: React.FC<DeckCardBackProps> = ({ onClick = () => {} }) => {
  return (
    <div onClick={onClick} className={style.cardBackContainer}>
      <div className={style.cardBackInnerContainer}></div>
    </div>
  );
};

export default DeckCardBack;
