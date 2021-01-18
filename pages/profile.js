import React from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

function Profile() {
  const { me } = useSelector(state => state.user);
  return (
    <>
      <Head>
        <title>My Profile | Blog</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="followingList" data={me.Followings} />
        <FollowList header="followerList" data={me.Followers} />
      </AppLayout>
    </>
  );
}

export default Profile;
