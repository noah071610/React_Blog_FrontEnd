import React,{useCallback} from 'react'
import { Card, Avatar,Button } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import {useDispatch} from 'react-redux'
import {logoutAction} from '../reducers/user'

function UserProfile() {
    const dispatch = useDispatch()
    const onLogOut = useCallback(() => {
        dispatch(logoutAction())},[])
    return (
        <Card
            actions={[
                    <SettingOutlined style={{fontSize:'1rem'}} key="setting" />,
                    <EditOutlined style={{fontSize:'1rem'}} key="edit" />,
                    <EllipsisOutlined style={{fontSize:'1rem'}} key="ellipsis" />
            ]}
        >
            <Card.Meta
                avatar={<Avatar>Noahtang</Avatar>}
                title="Noah"
            />
            <Button onClick={onLogOut}>Log out</Button>
        </Card>
    )
}

export default UserProfile
