import Image from "next/image";
import styles from "./dogCard.module.css";

export const DogCard = ({ dog }: { dog: string }) => {
  return (
    <div className={styles.container}>
      <Image src={dog} fill alt="Dog image" sizes="(max-width: 500px)" />
    </div>
  );
};

export const DogCardSkeleton = () => {
  return <div className={`${styles.container} ${styles.skeleton}`} />;
};
