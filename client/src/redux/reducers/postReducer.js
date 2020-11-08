import {ADD_POST, GET_POSTS,DELETE_POST , POSTS_ERROR} from '../actiontypes';

const initialState = {
    posts: [],
    loading: true,
    errors: []
}

export default function(state=initialState,action){
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts:action.payload,
                loading:false
            }
        case ADD_POST:
            return {
                ...state,
                posts:[action.payload,...state.posts]
                
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== action.payload._id)
              }  
        case POSTS_ERROR:
            return {
                loading:false,
                errors:action.payload
            }

        default:
            return state;
    }
}
