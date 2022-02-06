import { Card, Col, Row } from 'antd';
import { FC } from 'react';
import { Post } from '../../components';
import { data } from './postsData';

export const Home: FC = () => {
  return (
    <>
      <Row gutter={15}>
        <Col span={17}>
          {data.map(item => (
            <Post
              author={item.author}
              date={item.date}
              text={item.text}
              key={item._id}
              comments={item.comments}
            />
          ))}
        </Col>

        <Col span={7}>
          <Card>
            Sideer
          </Card>
        </Col>
      </Row>
    </>
  );
};

