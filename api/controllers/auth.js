import {db} from '../db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = (req, res) => {
    //check if user exists
    const q="SELECT * FROM users WHERE email=? OR username = ?";
    db.query(q,[req.body.email,req.body.username],(err,data)=>{
        if(err){
            return res.json({err})
        }
        if(data.length>0){
            return res.status(409).json("User already exists")
        }

        //hash password and create user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const q="INSERT INTO users(`username`,`email`,`password`) VALUES(?)";
        const values=[
            req.body.username,
            req.body.email,
            hash
        ];
        db.query(q,[values],(err,data)=>{
            if(err){
                return res.json({err})
            }
                return res.status(200).json("User created successfully")
        })

    })
}

export const login = (req, res) => {
    console.log(req.body)
    //check if user exists
    const q="SELECT * FROM users WHERE username=?";
    db.query(q,[req.body.username],(err,data)=>{
        if(err){
            return res.json({err})
        }
        if(data.length==0){
            return res.status(404).json("User not found")
        }
        //check password
        const validPassword = bcrypt.compareSync(req.body.password, data[0].password);
        if(!validPassword){
            return res.status(401).json("Wrong username or password")
        }
        //create token
        const token = jwt.sign({id:data[0].id},"jwtkey");
        const {password, ...info} = data[0];
        res.cookie("access_token",token,{
            httpOnly:true,
        }).status(200).json(info)

    })
}

export const logout = (req, res) => {
    console.log("logout")
}