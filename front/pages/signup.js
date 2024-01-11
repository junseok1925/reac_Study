import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const Signup = () => {
  return (
    <>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <AppLayout>
        <div>회원가입 하기</div>
      </AppLayout>
    </>
  );
};

export default Signup;
