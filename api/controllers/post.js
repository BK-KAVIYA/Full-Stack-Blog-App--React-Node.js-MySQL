import {db}  from "../db.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
    //cost q="SELECT * FROM posts where";
    const q=req.query.cat ? "SELECT * FROM posts where cat=?" : "SELECT * FROM posts";

    db.query(q,req.query.cat, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        } else {
            return res.status(200).json(result);
        }
    });

}
export const getPost = (req, res) => {
    const q="SELECT p.id, u.username, p.title, p.desc, p.img, u.img as userImage, p.cat, p.date FROM users u JOIN posts p ON u.id = p.uid where p.id=?";
    db.query(q,[req.params.id], (err, result) => {
        if (err) {
            return res.status(401).json(err);
        } else {
            return res.status(200).json(result[0]);
        }
    });
}
export const addPost = (req, res) => {
    const token=req.cookies.access_token;
    if(!token) return res.status(401).json("Not Unauthenticated");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if(err) return res.status(401).json("Not Unauthenticated");
        const q="INSERT INTO posts (title, desc, img, cat, date, uid) VALUES (?)";
        const values=[req.body.title,req.body.desc,req.body.img,req.body.cat, req.body.date, userInfo.id];
        db.query(q,[values], (err, result) => {
            if (err) {
                return res.status(401).json(err);
            } else {
                return res.status(200).json("post has been added!");
            }
        });
    });
    
}
export const deletePost = (req, res) => {
    const token=req.cookies.access_token;
    if(!token) return res.status(401).json("Not Unauthenticated");
    jwt.verify(token, "jwtkey", (err, userInfo) => {
        const postId=req.params.id;
        const q="DELETE FROM posts WHERE id=? AND uid=?";
        db.query(q,[postId,userInfo.id], (err, result) => {
            if (err) {
                return res.status(403).json("You can delete yourpost only!");
            } else {
                return res.json("post has been deleted!");
            }
        });
    });
    
}
export const updatePost = (req, res) => {
    const token=req.cookies.access_token;
    if(!token) return res.status(401).json("Not Unauthenticated");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if(err) return res.status(401).json("Not Unauthenticated");
        const postId=req.params.id;
        const q="UPDATE posts SET title=?, desc=?, img=?, cat=? WHERE id=? AND uid=?";
        const values=[req.body.title,req.body.desc,req.body.img,req.body.cat, userInfo.id];
        db.query(q,[...values,postId,userInfo.id], (err, result) => {
            if (err) {
                return res.status(401).json(err);
            } else {
                return res.status(200).json("post has been updated!");
            }
        });
    });
}