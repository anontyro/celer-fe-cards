import styles from "./InfoBanner.module.scss";

type InfoBannerProps = {
  message?: string;
};

const InfoBanner: React.FC<InfoBannerProps> = ({ message }) => {
  return (
    <div className={styles.infoBanner}>
      {message && <h2 className={styles.infoMessage}>{message}</h2>}
    </div>
  );
};

export default InfoBanner;
