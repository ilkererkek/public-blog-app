import React from 'react'
import {NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {deletePost} from '../redux/postActions'
export const Post = (post) => {
    

    
    const dispatch=useDispatch();
    return (
        <NavLink to={'/post/'+post.post._id}>
        <div  className="card post" onClick={
            (e)=>{
                if(e.target.name === 'delete-button') {
                    e.preventDefault();
                    e.stopPropagation();
                }
                else{
                    console.log('basıldı')
                }
            }
        }>
           <div className="flex post-header">
            <h2>
                {post.post.header}
            </h2>
            <button name="delete-button" className="btn-del" onClick={(e) => {
               dispatch(deletePost(post.post));
            }}>X</button>
           </div>
           <h5>
               Author : {post.post.author}
           </h5>
           <p>
               {post.post.text}
           </p>
           { post.post.imageurl && <img src={"http://localhost:5000/"+post.post.imageurl}></img>}
           
        </div>
        </NavLink>
    )
}

