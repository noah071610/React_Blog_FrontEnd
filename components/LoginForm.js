import React,{useState,useCallback} from 'react'
import {Form,Input,Button} from 'antd'
import Link from 'next/link'
import styled from 'styled-components'
import useInput from '../hooks/useInput'

const ButtonWrapper = styled.div`
    margin-top: 10px;
`

const FormWrapper = styled(Form)`
    padding : 2rem;
`

function LoginForm({setIsLoggedIn}) {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onSubmitForm = useCallback(
        () => {
            console.log(`Login Success ${id},${password}`);
            setIsLoggedIn(true)
        },
        [id,password],
    )
    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-id">ID</label>
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-password">Password</label>
                <Input 
                name="user-password" 
                type="password"
                value={password} 
                onChange={onChangePassword} 
                required />
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>Login</Button>
                <Link href="/signup"><a><Button>Sign Up</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    )
}

export default LoginForm
