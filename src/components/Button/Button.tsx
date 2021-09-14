import React, { FC } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  styleType?: 'transparent' | 'default';
  onClick?: (event: React.FormEvent<HTMLButtonElement>) => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  type = 'button',
  styleType = 'default',
  onClick,
}) => {
  const buttonStyles = `${styles.Button} ${
    styles[`Button_${styleType}`]
  } ${className}`;

  return (
    <button className={buttonStyles} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
