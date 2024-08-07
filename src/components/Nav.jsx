import { RiMenuFill } from "react-icons/ri";
import{ LOGO_URL} from '../utils/Constants'
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';

const Nav = () => {
    

let onlineStatus = useOnlineStatus();

    return (
        <>
        
        
        <nav className="w-screen  p-8 px-16 flex  items-center justify-between h-10vh">
                 <img className="w-16 h-16 rounded-full" src={LOGO_URL} alt="" />
                 <RiMenuFill  className="text-3xl sm:hidden" />
                  
                  <h2 className="text-xl text-white">Online Status :  {onlineStatus ?   "🟢" : "🔴"}</h2>
                 <div className=" sm:flex  text-amber-50 navElems hidden items-center gap-10">
                     {
                         ["Home", "About", "ContactUS" , 'Grocery'].map((elem , idx) => (
                             
                             
                             <Link to={elem} key={idx}>{elem}</Link>
                         ))
                     }
                 </div>
                 
             </nav>
        
        </>
    )
}

export default Nav;