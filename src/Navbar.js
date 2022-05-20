import { Link } from "react-router-dom";


  const Navbar = () => {
 

    return ( 
        <nav className="navbar">
        
            <div className="links">
             <Link to="/">All</Link>
             <Link to="/">Active</Link>
             <Link to="/">Completed</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;