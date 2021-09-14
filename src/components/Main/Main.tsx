import styles from './Main.module.scss';
import { TitledBlock } from '@components/TitledBlock';
import { FiltersForm } from '@components/FiltersForm';
import { TasksList } from '@components/TasksList';
import { FC, useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import qs from 'qs';
import { Filters } from '@interfaces';
import { filterTasks } from '../../helpers';
import { Loader } from '@components/Loader';

export const Main: FC = () => {
  const history = useHistory();
  const searchString = useLocation().search.replace('?', '');

  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState<Filters>(
    searchString ? qs.parse(searchString) : {},
  );
  const [originalTasks, setOriginalTasks] = useState([]);
  const filteredTasks = useMemo(
    () => filterTasks(originalTasks, filters),
    [filters, originalTasks],
  );

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:5000/db')
      .then((res) => res.json())
      .then((res) => {
        setOriginalTasks(res.data);
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  useEffect(() => {
    const cleanedFilters = (
      Object.keys(filters) as Array<keyof typeof filters>
    ).reduce((acc: Filters, key) => {
      if (!!filters[key]) {
        acc = { ...acc, [key]: filters[key] };
      }
      return acc;
    }, {});
    
    history.push({ search: qs.stringify(cleanedFilters) });
  }, [filters, history]);

  return (
    <div className={styles.Main}>
      <TitledBlock title="Filters">
        <FiltersForm initialValue={filters} changeFilters={setFilters} />
      </TitledBlock>
      <TitledBlock title="Results">
        {loading ? <Loader /> : <TasksList data={filteredTasks} />}
      </TitledBlock>
    </div>
  );
};
