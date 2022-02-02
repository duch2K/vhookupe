import { FC } from 'react';
import styles from './Container.module.scss';
import { ContainerProps } from './Container.props';

export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};
