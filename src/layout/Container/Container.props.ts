import { ReactNode } from 'react';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface ContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  children: ReactNode
}

export type { ContainerProps };