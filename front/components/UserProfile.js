import React, { useCallback } from "react";
import { Avatar, Button, Card } from "antd";

const UserProfile = ({ setIsloggedIn }) => {
  // 로그아웃 컨포넌트함수 setIsloggedIn의 값을 'false'로 변경
  const onLogOut = useCallback(() => {
    setIsloggedIn(false);
  }, []);
  return (
    <Card
      actions={[
        <div key="twit">
          트윗
          <br />
          123
        </div>,
        <div key="followings">
          팔로잉
          <br />
          123
        </div>,
        <div key="followings">
          팔로워
          <br />
          123
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>JS</Avatar>} title="JunSeok" />
      <Button onClick={onLogOut}>Logout</Button>
    </Card>
  );
};

export default UserProfile;
