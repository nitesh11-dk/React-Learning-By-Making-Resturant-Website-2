import React from "react";
import { createRoot } from 'react-dom/client';
import App from './components/App'
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import RestroCards from "./components/RestroCards";
import ResturantMenu from "./components/ResturantMenu";


let createRoutes = createBrowserRouter([
    {
        path:"/" ,
        element:<App/> ,
        children :[
            {
path:"/" ,
element : <RestroCards/>
            } ,
            {
                path:"/about" ,
                element:<About/> , 
            } ,
            {
                path:"rest/:id" ,
                element:<ResturantMenu/>
            }
        ] ,
        errorElement:<Error/>
        
    } ,
 
   
])



let root = createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={createRoutes} />)




