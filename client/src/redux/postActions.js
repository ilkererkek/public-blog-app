import {ADD_POST, DELETE_POST, GET_POSTS,POSTS_ERROR,} from './actiontypes';
import axios from 'axios';

export const getPosts = () => async dispatch =>{
    
    
    try {
       
        
        const res=await axios.get('/posts');
        dispatch({
            type:GET_POSTS,
            payload:res.data.data
        })
    } catch (error) {
       if(error.res)
       {
        dispatch({
            type:POSTS_ERROR,
            payload:error.res.data.error
        })
       }
       else{
           dispatch({
               type:POSTS_ERROR,
               payload:error
           })
       }
    }
}

export const addPost=(data) => async dispatch =>{
    
    
    try {
        
        const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          }
          
        const res=await axios.post('/posts',data,config);
        
        dispatch({
            type:ADD_POST,
            payload:res.data.data
        });
    } catch (error) {
        if(error.res)
       {
        dispatch({
            type:POSTS_ERROR,
            payload:error.res.data.error
        })
       }
       else{
           dispatch({
               type:POSTS_ERROR,
               payload:error
           })
       }
    }
}

export const deletePost=(data)=> async dispatch => {
    try {
        
        const res= await axios.delete('/posts/'+data._id);
        dispatch({
            type:DELETE_POST,
            payload:data
        });
    } catch (error) {
        if(error.res)
       {
        dispatch({
            type:POSTS_ERROR,
            payload:error.res.data.error
        })
       }
       else{
           dispatch({
               type:POSTS_ERROR,
               payload:error
           })
       }
    }
}
