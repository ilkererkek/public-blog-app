import React, {useEffect} from 'react'

import {Posts} from '../Components/Posts'
import { PostForm } from '../Components/PostForm'

export const MainPage = () => {
    
    
   
    return (
        <div className="container main flex"> 
            <Posts/>
            <PostForm/>
        </div>
    )
}
