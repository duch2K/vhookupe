import { FC } from 'react';
import { SendOutlined } from '@ant-design/icons';
import { Comment, Avatar, Form, Input, Button, Typography } from 'antd';
import { PostCommentsProps } from './PostComments.props';
import styles from './PostComments.module.scss';

const { Item } = Form;
const { TextArea } = Input;
const { Text } = Typography;

export const PostComments: FC<PostCommentsProps> = ({ comments }) => {
  return (
    <>
      {comments && comments.map(item => (
        <Comment
          key={item._id}
          className={styles.comment}
          actions={[<span key="comment-nested-reply-to">Reply to</span>]}
          author={<Text strong>{item.author}</Text>}
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
          content={<Text>{item.text}</Text>}
        ></Comment>
      ))}
      <Form layout="inline">
        <Item>
          <Avatar src="https://joeschmoe.io/api/v1/random" />
        </Item>
        <Item style={{ flex: 1 }}>
          <TextArea
            placeholder="Leave a comment..."
            autoSize={{ minRows: 1, maxRows: 10 }}
          />
        </Item>
        <Item>
          <Button type="text" icon={<SendOutlined />} />
        </Item>
      </Form>
    </>
  );
};
