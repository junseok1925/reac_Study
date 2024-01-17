import React, { useCallback, useDebugValue } from "react";
import { Avatar, Button, Card } from "antd";
import { useDispatch } from "react-redux";
import { logoutAction } from "../reducers";

const UserProfile = () => {
  const dispatch = useDispatch();

  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
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
