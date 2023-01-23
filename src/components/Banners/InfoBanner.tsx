import styles from "./InfoBanner.module.scss";

type InfoBannerProps = {
  message?: string;
};

const InfoBanner: React.FC<InfoBannerProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className={styles.infoBanner}>
      <p>{message}</p>
    </div>
  );
};

export default InfoBanner;
