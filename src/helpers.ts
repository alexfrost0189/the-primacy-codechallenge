import { Filters, TaskData } from '@interfaces';

export const filterTasks = (
  tasks: TaskData[],
  { name, status, dateTo, dateFrom }: Filters,
) => {
  let filteredTasks = [...tasks];
  if (name) {
    const regex = new RegExp(name, 'gi');
    filteredTasks = filteredTasks.filter((task) => regex.test(task.name));
  }
  if (status) {
    filteredTasks = filteredTasks.filter((task) => task.status === status);
  }
  if (dateFrom) {
    filteredTasks = filteredTasks.filter((task) => task.date > dateFrom);
  }
  if (dateTo) {
    filteredTasks = filteredTasks.filter((task) => task.date < dateTo);
  }

  return filteredTasks;
};
