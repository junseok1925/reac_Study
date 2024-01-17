import React from "react";
import PropTypes from "prop-types"; // 레이아웃 컴포넌트 임폴트
import Link from "next/link"; // link 컴포넌트 임폴드
import { Menu, Input, Row, Col } from "antd"; // ant disign 임폴트 메뉴, 검색창 Row, Col -> 반응형 지원
import { useSelector } from "react-redux";

import styled from "styled-components"; // 스타일 컨포넌트

import UserProfile from "../components/UserProfile"; // 로그인, 프로필 컨포넌트 가져오기
import LoginForm from "../components/LoginForm";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

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
          <SearchInput enterButton />
        </Menu.Item>

        <Menu.Item>
          <Link href="/signup">
            <a>signup</a>
          </Link>
        </Menu.Item>
      </Menu>
      {/* 반응형 설정 ( 가로 ) ex) 24등분해서 차지할 부분이 6
          테블릿 : sm, 모바일: xs 
          gutter: col끼리들 간의 간격
      */}

      <Row gutter={8}>
        <Col xs={24} md={6}>
          {/* 조건부 렌더링을 구현 -> isLoggedIn의 값이 'true'면 UserProfile 컴포넌트가 렌더링되고, 'false'면 loginForm 컴포넌트가 렌더링된다.*/}
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://velog.io/@rkdwnstjr16/posts"
            target="__blank"
            rel="noreferrer noopenner"
          >
            {/* blank -> 새창에서 띄우기, 'noreferrer noopenner' -> 어디서 새창을 열었는지 정보를 삭제 - 새창으로 띄우기 할때 보안유지 */}
            Made by JunSeok
          </a>
        </Col>
      </Row>
      {children}
    </div>
  );
};

AppLayout.ropTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
