import React from 'react';
import {Post} from './Post';
import {useSelector} from 'react-redux';
export const Posts = () => {
    
    const postsList = useSelector(state => state.postReducer);
    const {loading, error, posts} = postsList;
    console.log(posts);
    
    return (
        <div className="post-list">
            <ul>
            {posts.map(post => (<li  key={post._id}><Post  post={post}/></li>))}
            </ul>
        </div>
    )
}