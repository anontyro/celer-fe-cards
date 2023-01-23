import styles from "./InfoBanner.module.scss";

type InfoBannerProps = {
  message?: string;
};

const InfoBanner: React.FC<InfoBannerProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className={styles.infoBanner}>
      <h2 className={styles.infoMessage}>{message}</h2>
    </div>
  );
};

export default InfoBanner;
