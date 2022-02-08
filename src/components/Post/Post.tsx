import { FC, useState } from 'react';
import { Avatar, Button, Card, Divider, Space, Typography } from 'antd';
import { CommentOutlined, HeartOutlined, ShareAltOutlined } from '@ant-design/icons';
import { PostProps } from './Post.props';
import { PostComments } from '../';
import styles from './Post.module.scss';

const { Meta } = Card;
const { Paragraph } = Typography;

export const Post: FC<PostProps> = ({ author, date, text, img, comments }) => {
  const [likes, setLikes] = useState<number>(1);

  const handleLike = () => {
    setLikes(l => ++l);
  };

  return (
    <Card className={styles.post}>
      <Meta
        className={styles.title}
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" size={50} />}
        title={author}
        description={date}
      />
      {text && <Paragraph>{text}</Paragraph>}
      {img && <img src={img} alt={img} />}
      <Space>
        <Button
          shape="round"
          icon={<HeartOutlined />}
          onClick={handleLike}
        >
          <span>
            {likes ? likes : null}
          </span>
        </Button>
        <Button icon={<CommentOutlined />} shape="round">
          1
        </Button>
        <Button icon={<ShareAltOutlined />} shape="round">
          1
        </Button>
      </Space>

      <Divider />

      <PostComments comments={comments} />
    </Card>
  );
};
