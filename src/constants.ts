import { TaskStatuses } from '@interfaces';
import { SelectOption } from '@components/Select/Select';

export const FILTER_SELECT_OPTIONS: SelectOption[] = [
  {
    text: 'Client Review',
    value: TaskStatuses.clientReview,
  },
  {
    text: 'In Progress',
    value: TaskStatuses.inProgress,
  },
  {
    text: 'To Do',
    value: TaskStatuses.toDo,
  },
  {
    text: 'Done',
    value: TaskStatuses.done,
  },
  {
    text: 'Internal QA',
    value: TaskStatuses.internalQA,
  },
];
