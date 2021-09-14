import styles from './Select.module.scss';
import React, { FC } from 'react';

interface SelectProps {
  label: string;
  name: string;
  className?: string;
  options: SelectOption[];
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface SelectOption {
  text: string;
  value: string | number;
}

export const Select: FC<SelectProps> = ({
  label,
  className,
  name,
  options,
  value = '',
  onChange,
}) => {
  return (
    <label className={`${styles.Select} ${className}`}>
      <span className={styles['Select__label']}>{label}</span>
      <select
        className={styles['Select__field']}
        onChange={onChange}
        name={name}
        value={value}
      >
        <option value="">Empty</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </label>
  );
};
