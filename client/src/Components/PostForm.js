import React from 'react'
import {useState,useEffect} from 'react';
import {addPost} from '../redux/postActions';
import {useDispatch} from 'react-redux'
import { set } from 'mongoose';
export const PostForm = () => {
    const [header,setHeader]= useState('');
    const [author,setAuthor]= useState('');
    const [text,setText]= useState('');
    const [filename,setFilename]= useState('Upload A Photo!');
    const [file,setFile]=useState('');
    const [isloaded,setLoaded]=useState('');
    const dispatch = useDispatch()
    const onChange = (e) => {
        setFile(e.target.files[0])
        if(e.target.files[0])
        {
            setLoaded('file')
            setFilename(e.target.files[0].name)
        }
        else{
            setLoaded('')
            setFilename('Upload A Photo!')
        }
    }
    const onSubmit= (e) => {
       e.preventDefault();
       let formData = new FormData();
       formData.append('header',header);
       formData.append('author',author);
       formData.append('text',text);
       formData.append('postimage',file);
        dispatch(addPost(formData));
        setAuthor('');
        setHeader('');
        setFile('');
        setFilename('Upload A Photo!');
        setText('');
        setLoaded('')
    }


    return (
        <div className="post-form">
            <h3>Enter a new post.</h3>
            <form id="post-form">
                <div className="form-control">
                    <label>Header of post :</label>
                    <input type="text" value={header} onChange={
                        (e) =>{
                            setHeader(e.target.value);
                        }
                    }></input>
                </div>
                <div className="form-control">
                    <label>Your Name :</label>
                    <input type="text" value={author} onChange={
                        (e) =>{
                            setAuthor(e.target.value);
                        }
                    }></input>
                </div>
                <div className="form-control">
                    <label>Text :</label>
                    <textarea type="textarea" form="post-form"  rows="8" cols="30" value={text} onChange={
                        (e) =>{
                            setText(e.target.value);
                        }
                    }></textarea>
                </div>
                <div className="form-control">
                <label className={"custom-file-upload "+isloaded}>
                <input type="file"  onChange={onChange}/>
                    {filename}
                </label>
                </div>
                <input className="btn submit" type="submit" value="Submit" onClick={onSubmit}></input>
            </form>
        </div>
    )
}
