import React, { useState, useCallback } from "react";
import { Button, Form, Input } from "antd"; // ant Design
import Link from "next/link";
import styled from "styled-components"; // 스타일 컨포넌트
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import useInput from "../hooks/useInput";
import { loginAction } from "../reducers";

// 스타일 컨포넌트 : 스타일을 미리 정의, 컴포넌트에 적용시키는 방식으로 스타일을 적용시킨다
const ButtonWrapper = styled.div`
  margin-top: 10px;
`;
const FormWrapper = styled(Form)`
    padding = 10px;
`;

const LoginForm = () => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const dispatch = useDispatch();

  // useCallback 훅을 사용하여 onsubmitForm 함수를 생성한다
  // 폼이 제출될 때(onsubmitForm 함수가 호출될 때) 실행되는 함수로, 현재 입력된 id와 password를 콘솔에 출력하고,
  // setIsLoggedIn 함수를 사용하여 로그인 상태를 true로 업데이트한다
  const onsubmitForm = useCallback(() => {
    dispatch(
      loginAction({
        id,
        password,
      })
    );
  }, [id, password]);

  return (
    <FormWrapper onFinish={onsubmitForm} style={{ padding: "10px" }}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <input
          name="user-password" // 입력필드의 이름
          type="password" // 비밀번호를 입력받는 필드, 입력한 문자가 "*"로 마스킹된다.
          value={password} // "password"값은 이 입력 필드의 값으로 설정된다
          onChange={onChangePassword} // 입력필드의 값이 변경될 때 호출되는 콜백 함수로 'onChangePassword'함수는 해당 값이 상태에 업데이트되도록 한다.
          required // 입력 필드가 비어있으면 제출이 되지 않도록 걍제하는 역할
        />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

LoginForm.propType = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default LoginForm;
