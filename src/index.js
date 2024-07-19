import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Home from "../src/views/Home/Home"
import Portfolio from './components/Portfolio/Portfolio';
import About from './views/About/About';
import Contact from './components/Contact/Contact';
import ProjectCard from './components/ProjectCard/ProjectCard';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path : '/contact',
        element : <Contact/>
    },
    {
        path : '/project',
        element : <ProjectCard/>
    }

]) 

root.render(<RouterProvider router={router}/>)

