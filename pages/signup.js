import React, { useState, useCallback } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import PropTypes from 'prop-types';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';
import { SIGN_UP_REQUEST } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';

const TextInput = ({ value }) => {
  return <div>{value}</div>;
};

TextInput.propTypes = {
  value: PropTypes.string,
};

const Signup = () => {
  const dispatch = useDispatch();
  const { signUpLoading } = useSelector(state => state.user);

  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log(`Sign up Success ${email},${nickname},${password}`);
    dispatch({
      type: SIGN_UP_REQUEST,
      data: { email, password, nickname },
    });
  }, [password, passwordCheck, term]);

  const onChangePasswordCheck = useCallback(
    e => {
      setPasswordError(e.target.value !== password);
      setPasswordCheck(e.target.value);
    },
    [password],
  );

  const onChangeTerm = useCallback(e => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  return (
    <AppLayout>
      <Head>
        <title>Sing up | Blog</title>
      </Head>
      <Form onFinish={onSubmit} style={{ padding: 10 }}>
        <TextInput value="135135" />
        <div>
          <label htmlFor="user-email">E-mail</label>
          <br />
          <Input name="user-email" type={email} value={email} required onChange={onChangeEmail} />
        </div>
        <div>
          <label htmlFor="user-nickname">Name</label>
          <br />
          <Input name="user-nickname" value={nickname} required onChange={onChangeNickname} />
        </div>
        <div>
          <label htmlFor="user-password">Password</label>
          <br />
          <Input
            name="user-password"
            type="password"
            value={password}
            required
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor="user-password-check">Password Check</label>
          <br />
          <Input
            name="user-password-check"
            type="password"
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
          />
          {passwordError && <div style={{ color: 'red' }}>Passwords do not match.</div>}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
            Are you agree to the terms?
          </Checkbox>
          {termError && (
            <div style={{ color: 'red' }}>you have to agree to the terms and conditions.</div>
          )}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit" loading={signUpLoading}>
            Sign up
          </Button>
        </div>
      </Form>
    </AppLayout>
  );
};

export default Signup;
