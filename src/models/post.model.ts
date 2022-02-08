import { Comment } from './comment.model';

export interface Post {
  _id: number;
  author: string;
  date: string;
  text: string;
  comments: Comment[]
}