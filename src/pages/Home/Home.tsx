import { Card, Col, Row } from 'antd';
import { FC } from 'react';
import { Post } from '../../components/Post/Post';

export const Home: FC = () => {
  return (
    <>
      {/* <Post /> */}
      <Row gutter={15}>
        <Col span={17}>
          <Post />
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

