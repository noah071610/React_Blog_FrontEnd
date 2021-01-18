import React from 'react'
import { useSelector } from 'react-redux';
import {Card, Popover,Button,Avatar,Comment, List} from 'antd'
import PropTypes from 'prop-types';
import { EllipsisOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, RetweetOutlined } from '@ant-design/icons'
import PostImages from './PostImages'
import CommentForm from './CommentForm' 
import PostCardContent from './PostCardContent'
import useToggle from '../hooks/useToggle';

function PostCard({post}) {
    const [commentFormOpened, onToggleComment] = useToggle('');
    const [liked, onToggleLike] = useToggle('');
    const id = useSelector((state) => state.user.me ?.id);
    return (
      <div>
        <Card
          cover={post.Images[0] && <PostImages images={post.Images} />}
          actions={[
            <RetweetOutlined key="retweet" />,
                        liked ?<HeartTwoTone twoToneColor="red" key="heart" onClick={onToggleLike} />
                        : <HeartOutlined key="heart" onClick={onToggleLike} />,
            <MessageOutlined key="message" onClick={onToggleComment} />,
            <Popover
              key="more"
              content={(
                <Button.Group>
                  {id && post.User.id === id
                            ? (
                              <>
                                <Button>수정</Button>
                                <Button type="danger">삭제</Button>
                              </>
                            )
                            : <Button>신고</Button>}
                </Button.Group>
)}
            >
              <EllipsisOutlined />
            </Popover>
                    ]}
        >
          <Card.Meta
            avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
            title={post.User.nickname}
            description={<PostCardContent postData={post.content} />}
          />
        </Card>
        {commentFormOpened &&
             (
             <div>
               <CommentForm />
               <List
                 header={`${post.Comments.length} 댓글`}
                 itemLayout="horizontal"
                 dataSource={post.Comments}
                 renderItem={(item) => (
                   <li>
                     <Comment
                       author={item.User.nickname}
                       avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                       content={item.content}
                     />
                   </li>
                    )}
               />
             </div>
)}
      </div>
    )
}

PostCard.PropTypes = {
    post: PropTypes.shape({
      id: PropTypes.number,
      User: PropTypes.object,
      content: PropTypes.string,
      Images: PropTypes.arrayOf(PropTypes.any),
      Comments: PropTypes.arrayOf(PropTypes.any),
      imagePaths: PropTypes.array,
      postAdded: PropTypes.bool
    }),
  };

export default PostCard
