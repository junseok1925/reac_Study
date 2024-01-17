// 모든 페이지에서 다 공통인 부분은 _app.js에 넣으면 된다
import React from "react";
import PropTypes from "prop-types";
import Head from "next/head"; // next 헤드 컴포넌트를 제공
import wrapper from "../store/configureStore"; // redux wrapper 거져오기


const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

NodeBird.PropTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(NodeBird);
