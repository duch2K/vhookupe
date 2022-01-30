import { FC } from 'react';
import styles from './Container.module.scss';
import { ContainerProps } from './Container.props';

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}

export default Container;
