import React, { useState, useCallback } from "react";
import { Button, Form, Input } from "antd";
import Link from "next/link";

const LoginForm = () => {
  // id, password의 상태를 초기화
  // setId, setPassword로 상태를 업데이트
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  // id, password의 필드값이 변경 즉, 입력될때 호출되는 콜백함수이다.
  // "userCallback" 훅을 사용하여 생성됨
  // 해당 입력 필드의 값(id, pawwsord)을 상태로 업데이트한다.
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  return (
    <Form>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <div>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
