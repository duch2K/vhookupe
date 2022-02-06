import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PostProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  _id?: number;
  author: string;
  date: string;
  text?: string;
  img?: string;
  comments?: any[];
}
