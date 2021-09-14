import styles from './TitledBlock.module.scss';
import { FC } from 'react';

interface TitledBlockProps {
  title: string;
}

export const TitledBlock: FC<TitledBlockProps> = ({ children, title }) => {

  return (
    <div className={styles.TitledBlock}>
      <div className={styles['TitledBlock-header']}>{title}</div>
      <div className={styles['TitledBlock-body']}>{children}</div>
    </div>
  );
};
