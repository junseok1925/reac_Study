import React from 'react';
import PropTypes from 'prop-types'; // 레이아웃 컴포넌트 임폴트
import Link from 'next/link'; // link 컴포넌트 임폴드
import { Menu, Input, Row, Col } from 'antd'; // ant disign 임폴트 메뉴, 검색창 Row, Col -> 반응형 지원

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>index</a>
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link href="/profile">
            <a>profile</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>signup</a>
          </Link>
        </Menu.Item>
      </Menu>
      {/* 반응형 설정 ( 가로 ) */}
      <Row>
        <Col xs={13} md={6}>
          왼쪽 메뉴
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          오른쪽 메뉴
        </Col>
      </Row>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
