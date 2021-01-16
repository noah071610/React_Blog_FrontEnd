import React,{useCallback} from 'react'
import { Card, Avatar,Button } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

function UserProfile({setIsLoggedIn}) {
    const onLogOut = useCallback(() => {
            setIsLoggedIn(false)},[])
    return (
        <Card
            actions={[
                <div key="div" style={{display:'grid',gridTemplateColumns:'repeat(3, 1fr)'}}>
                    <SettingOutlined style={{fontSize:'1rem'}} key="setting" />
                    <EditOutlined style={{fontSize:'1rem'}} key="edit" />
                    <EllipsisOutlined style={{fontSize:'1rem'}} key="ellipsis" />
                </div>
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
