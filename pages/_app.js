import React from 'react';
import propTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';
import withReduxSaga from 'next-redux-saga';
import wrapper from '../store/configureStore';

function App({ Component }) {
  // <Provider store={store}> no need
  return (
    <>
      <Head>
        <title>Noah-Blog</title>
      </Head>
      <Component />
    </>
  );
}
App.propTypes = {
  Component: propTypes.elementType.isRequired,
};

export default wrapper.withRedux(withReduxSaga(App)); // role of provider (Before : export default wrapper.withRedux(App);)
