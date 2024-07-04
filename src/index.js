import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import PostDetails from './pages/PostDetails';
import Resister from './pages/Resister';
import Login from './pages/Login';
import Authors from './pages/Authors';
import CreatePost from './pages/CreatePost';
import CategoryPosts from './pages/CategoryPosts';
import AuthorPosts from './pages/AuthorPosts';
import Dashboard from './pages/Dashboard';
import EditPost from './pages/EditPost';
import DeletePost from './pages/DeletePost';
import Logout from './pages/Logout';
import UserProfile from './pages/UserProfile';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index:true, element:<Home/>},
      {path:"posts/:id",element:<PostDetails/>},
      {path:"resister",element:<Resister/>},
      {path:"login",element:<Login/>},
      {path:"profile/:id",element:<UserProfile/>},
      {path:"profile/id",element:<Authors/>},
      {path:"create",element:<CreatePost/>},
      {path:"posts/categries/category",element:<CategoryPosts/>},
      {path:"posts/users/:id",element:<AuthorPosts/>},
      {path:"mypost/:id",element:<Dashboard/>},
      {path:"mypost/:id/edit",element:<EditPost/>},
      {path:"mypost/:id/delete",element:<DeletePost/>},
      {path:"logout",element:<Logout/>}
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
