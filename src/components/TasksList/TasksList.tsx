import { TaskData } from '@interfaces';
import styles from './TasksList.module.scss';
import { TaskCard } from '@components/TaskCard';
import { FC } from 'react';

interface TasksListProps {
  data: TaskData[];
}

export const TasksList: FC<TasksListProps> = ({ data }) => {
  if (data.length === 0)
    return <div className={styles.TasksList}>Nothing has found</div>;

  return (
    <div className={styles.TasksList}>
      {data.map((task) => (
        <div key={task.date} className={styles['TasksList__col']}>
          <TaskCard data={task} />
        </div>
      ))}
    </div>
  );
};
