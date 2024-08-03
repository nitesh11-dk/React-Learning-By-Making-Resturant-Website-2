import Nav from "./Nav";
import { Outlet } from "react-router-dom";



 const App = () => {
    
     



     return (
        <>
         <div className="main w-screen p-4 bg-slate-700 ">
    
         <Nav></Nav>
 <Outlet/>
             </div>
         </>
         
     )
}

export default App;