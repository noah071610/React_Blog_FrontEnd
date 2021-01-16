import React from 'react'
import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import NicknameEditForm from '../components/NicknameEditForm'
import FollowList from '../components/FollowList'

function Profile() {
    const followerList = [{ nickname: 'Noah' }, { nickname: 'GaSeon' }, { nickname: 'Ichuka' }];
    const followingList = [{ nickname: 'Mina' }, { nickname: 'SeongHyun' }, { nickname: 'James' }];
    return (
        <>
            <Head>
                <title>My Profile | Blog</title>
            </Head>
            <AppLayout>
                <NicknameEditForm/>
                <FollowList header="followingList" data={followingList}/>
                <FollowList header="followerList" data={followerList}/>
            </AppLayout>
        </>
    )
}

export default Profile
