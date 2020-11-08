import React from 'react'
import {useParams,Redirect,Link} from 'react-router-dom';
import{useSelector} from 'react-redux';
import { createSelector } from 'reselect'
import icon from '../arrow.svg';

export const Post = () => {
    
    const { id } = useParams();
    const postfinder = createSelector(state=>state.postReducer.posts, posts=>posts.filter(post=>post._id===id));
    const post = useSelector(postfinder)[0];
    
    
   if(post)
    {
        return (
            <div className="post-page">
                <div className="container rel">
                    <Link to="/" >
                        <img src={icon}></img>
                    </Link>
                    <h2>
                        {post.header}
                    </h2>
                </div>
                <div className="post-wrapper container">
                    <h4>
                        Author: {post.author}
                    </h4>
                    <p>
                        {post.text}
                    </p>
                    { post.imageurl && <img src={"https://public-blog-app.herokuapp.com/"+post.imageurl}></img>}
                   
                </div>
                
                
            </div>
        )
    }
    else{
        return (
            <div>
                <Redirect to="/404"/>
            </div>
        )
    }
    
}
