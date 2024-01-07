import {db}  from "../db.js";

export const getPosts = (req, res) => {
    //cost q="SELECT * FROM posts where";
    const q=req.query.cat ? "SELECT * FROM posts where cat=?" : "SELECT * FROM posts";

    db.query(q,req.query.cat, (err, result) => {
        if (err) {
            return res.send(err);
        } else {
            return res.status(200).json(result);
        }
    });

}
export const getPost = (req, res) => {
    const q="SELECT u.username, p.title, p.desc, p.img, p.cat, p.date FROM users u JOIN posts p ON u.id = p.uid where p.id=?";
    db.query(q,[req.params.id], (err, result) => {
        if (err) {
            return res.json(err);
        } else {
            return res.status(200).json(result[0]);
        }
    });
}
export const addPost = (req, res) => {
    
}
export const deletePost = (req, res) => {
    
}
export const updatePost = (req, res) => {
    
}