import React, { useContext, useEffect, useState } from 'react'
import Edite from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { Menu } from '../component/Menu'
import axios from 'axios'
import moment from 'moment'
import { AuthContext } from '../context/authContext'

export default function Single() {
  const [post, setPost] = useState({});
  const location=useLocation();
  const navigate=useNavigate();
  const postId=location.pathname.split('/')[2]

  const curentUser=useContext(AuthContext).curentUser

  useEffect(() => {
      const fetchPosts = async () => {
          try {
              const res = await axios.get(`/posts/${postId}`);
              setPost(res.data);
          } catch (err) {
              console.log(err);
          }
        };
        fetchPosts();
    },[postId]);

    const handleDelete=async()=>{
      try {
        await axios.delete(`/posts/${postId}`)
        navigate('/')
      } catch (err) {
        console.log(err);
      }
    }
  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt="" />
        <div className="user">
          { post.userImage &&
            <img src={post?.userImage} alt=""/>
          }
          <div className="info">
            <span className="username">{post.username}</span>
            <p className="date">Posted {moment(post.date).fromNow()}</p>
          </div>
          {curentUser?.username === post.username && <div className="edite">
            <Link to='/write?edite=2' state={post}>
              <img src={Edite} alt="" />
            </Link>
            <img onClick={handleDelete} src={Delete} alt="" />
          </div>}
        </div>
        <h1 className="title">{post.title}</h1>
        {post.desc}
        </div>
      <Menu cat={post.cat} />
    </div>
  )
}
