import { FC } from 'react';
import { Container } from '../../layout';
import styles from './AppHeader.module.scss';

export const AppHeader: FC = () => {
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.logo}>
          VH
        </div>
      </Container>
    </div>
  );
}
