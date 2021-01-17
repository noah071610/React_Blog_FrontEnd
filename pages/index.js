import React from 'react'
import AppLayout from '../components/AppLayout'
import {useSelector} from 'react-redux'
import PostForm from '../components/PostForm'
import PostCard from '../components/PostCard'

function Home() {
    const {isLoggedIn} = useSelector(state => state.user)
    const {mainPosts} = useSelector(state => state.post)
    // = const mainPosts = useSelector(state => state.post.mainPosts)
    return (
        <>
            <AppLayout>
            {isLoggedIn && <PostForm />}
            {mainPosts.map((post) => {
                return ( //key는 index로 쓰지말자 (불변하면 가능)
                <PostCard key={post.id} post={post} />
                );
            })}
            </AppLayout>
        </>
    )
}

export default Home
