import React,{useState} from 'react'
import propTypes from 'prop-types'
import Link from 'next/link'
import {Menu, Input,Row,Col} from 'antd'
import LoginForm from './LoginForm'
import UserProfile from './UserProfile'

function AppLayout({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <div>
            <Menu mode='horizontal'>
                <Menu.Item>
                    <Link href="/"><a>blog</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>profile</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Input.Search enterButton style={{verticalAlign: 'middle'}}/>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>signup</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                {isLoggedIn ? <UserProfile/> : <LoginForm/>}
                </Col>
                <Col xs={24} md={12}>
                {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://youtube.com" target="_blank" rel="noreferrer noopener">Go Youtube</a>
                </Col>
            </Row>
        </div>
    )
}

AppLayout.propTypes = {
    children: propTypes.node.isRequired,
}

export default AppLayout
