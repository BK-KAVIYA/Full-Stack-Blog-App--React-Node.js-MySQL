import React, { useContext, useEffect, useState } from 'react'
import Edite from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from '../component/Menu'
import axios from 'axios'
import moment from 'moment'
import { AuthContext } from '../context/authContext'

export default function Single() {
  const [post, setPost] = useState({});

  const location=useLocation();
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
  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt="" />
        <div className="user">
          <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt=""/>
          <div className="info">
            <span className="username">{post.username}</span>
            <p className="date">Posted {moment(post.date).fromNow()}</p>
          </div>
          {curentUser.username === post.username && <div className="edite">
            <Link to='/write?edite=2'>
              <img src={Edite} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>}
        </div>
        <h1 className="title">{post.title}</h1>
        {post.desc}
        </div>
      <Menu />
    </div>
  )
}
