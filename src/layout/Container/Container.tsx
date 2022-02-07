import { FC } from 'react';
import cn from 'classnames';
import styles from './Container.module.scss';
import { ContainerProps } from './Container.props';

export const Container: FC<ContainerProps> = ({ className, children, ...props }) => {
  return (
    <div className={cn(styles.container, className)} {...props}>
      {children}
    </div>
  );
};
