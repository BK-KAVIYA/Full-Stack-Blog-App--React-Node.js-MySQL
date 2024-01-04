import React from 'react';
import {createBrowserRouter,RouterProvider,Route, Outlet} from 'react-router-dom';
import  Register  from './pages/Register';
import  Login  from './pages/Login';
import  Home  from './pages/Home';
import  Single  from './pages/Single';
import  Write  from './pages/Write';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import "./style.scss";


const Layout=()=>{
  return(
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/post/:Id',
        element:<Single/>,
      },
      {
        path:'/write',
        element:<Write/>,
      },
    ]
  },
  {
    path:'/register',
    element:<Register/>,
  },
  {
    path:'/login',
    element:<Login/>,
  }
  
]);

export default function App() {
  return (
    <div className='app'>
      <div className='container'>
        <RouterProvider router={router}/> 
      </div>
    </div>
  );
}

