import styles from './TaskCard.module.scss';
import { IconUsers, IconClockRed, IconClockGreen } from '@components/Icons';
import { TaskData } from '@interfaces';
import { DateTime } from 'luxon';
import { FC } from 'react';

interface TaskCardProps {
  data: TaskData;
}

export const TaskCard: FC<TaskCardProps> = ({
  data: { name, department, status, date },
}) => {
  const currentTime = Date.now();
  const dateString = DateTime.fromMillis(date).toLocaleString(
    DateTime.DATE_MED,
  );

  return (
    <div className={styles.TaskCard}>
      <div className={styles['TaskCard__row']}>
        <div className={styles['TaskCard__name']}>{name}</div>
        <div className={styles['TaskCard__status']}>{status}</div>
      </div>
      <div className={styles['TaskCard__row']}>
        <div className={styles['TaskCard__iconText']}>
          <IconUsers />
          {department}
        </div>
        <div className={styles['TaskCard__iconText']}>
          {currentTime > date ? <IconClockRed /> : <IconClockGreen />}
          {dateString}
        </div>
      </div>
    </div>
  );
};
