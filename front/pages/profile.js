import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";

const Profile = () => {
  const followerList = [
    { nickname: "강준석1" },
    { nickname: "강준석2" },
    { nickname: "강준석3" },
  ];
  const followingList = [
    { nickname: "준석1" },
    { nickname: "준석2" },
    { nickname: "준석3" },
  ];
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
