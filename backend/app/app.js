import express from 'express';
import cors from 'cors';
import {ConnectDB} from '../config/db.js';
import dotenv from 'dotenv';
dotenv.config();

const app= express();
const PORT= process.env.PORT ||3000;

import cookieParser from 'cookie-parser';
//cokie middleware 
app.use(cookieParser());

//Using CORS middleware to allow cross-origin requests
app.use(cors({
    origin: process.env.CORS_ORIGIN , // Allow requests from this origin
    credentials:true // Allow credentials (cookies, authorization headers, etc.)
}));




//Middleware to parse JSON requests
app.use(express.json());



//Routes setting
import login from '../Routes/login.routes.js';
app.use('/api/login', login);

import register from '../Routes/register.routes.js';
app.use('/api/register', register);

import logout from '../Routes/logout.routes.js'
app.use('/api/logout',logout);

import del from '../Routes/delete.routes.js';
app.use('/api/delete',del);

import update from '../Routes/update.routes.js';
app.use('/api/update',update);

import user from '../Routes/profile.routes.js'
app.use('/api/me',user);


//normal check for backend
app.get('/',(req,res)=>{
    res.send("hello world");
})


//Database connection
//IIFE 
;(async () => {
    try {
        await ConnectDB();

        app.on('error', (err) => {
            console.error('Server error:', err);
        });

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    } catch (error) {
        console.error('connection failed:', error);
        process.exit(1); // Exit the process with failure
    }
}
)();


export default app;


