import styles from './Input.module.scss';
import React, { FC } from 'react';

interface InputProps {
  label: string;
  name: string;
  className?: string;
  placeholder?: string;
  type?: 'text' | 'number';
  value?: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isDate?: boolean;
}

export const Input: FC<InputProps> = ({
  label,
  name,
  placeholder,
  className,
  type = 'text',
  value,
  onChange,
}) => {
  return (
    <label className={`${styles.Input} ${className}`}>
      <span className={styles['Input__label']}>{label}</span>
      <input
        className={styles['Input__field']}
        name={name}
        type={type}
        value={value || ''}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
};
