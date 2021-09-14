import { Button } from '@components/Button';
import { Input } from '@components/Input';
import styles from './FilterForm.module.scss';
import React, { FC, FormEvent, useState } from 'react';
import { Select } from '@components/Select';
import { FILTER_SELECT_OPTIONS } from '@constants';
import { Filters } from '@interfaces';
import { DateTime } from 'luxon';

interface FiltersFormProps {
  initialValue: Filters;
  changeFilters: (value: Filters) => void;
}

export const FiltersForm: FC<FiltersFormProps> = ({ changeFilters, initialValue }) => {
  const [state, setState] = useState(initialValue);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;

    setState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleClickApply = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const stateKeys = Object.keys(state);
    const values = { ...state };

    stateKeys.forEach((key) => {
      if (key === 'dateFrom' || key === 'dateTo') {
        values[key] = DateTime.fromFormat(
          values[key] as string,
          'D',
        ).toMillis();
      }
    });

    changeFilters(values);
  };

  const handleClickClear = () => {
    changeFilters({});
    setState({});
  };

  return (
    <form onSubmit={handleClickApply}>
      <div className={styles['FiltersForm__inputs']}>
        <div className={styles['FiltersForm__inputCol']}>
          <Input
            label="Name"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles['FiltersForm__inputCol']}>
          <Select
            label="Status"
            name="status"
            value={state.status}
            options={FILTER_SELECT_OPTIONS}
            onChange={handleChange}
          />
        </div>
        <div className={styles['FiltersForm__inputCol']}>
          <Input
            label="Due Date (From)"
            name="dateFrom"
            value={state.dateFrom}
            onChange={handleChange}
            placeholder="mm/dd/yyyy"
          />
        </div>
        <div className={styles['FiltersForm__inputCol']}>
          <Input
            label="Due Date (From)"
            name="dateTo"
            value={state.dateTo}
            onChange={handleChange}
            placeholder="mm/dd/yyyy"
          />
        </div>
      </div>
      <div className={styles['FiltersForm__buttons']}>
        <Button styleType="transparent" onClick={handleClickClear}>
          Clear
        </Button>
        <Button
          className={styles['FiltersForm__button']}
          type="submit"
        >
          Apply
        </Button>
      </div>
    </form>
  );
};
