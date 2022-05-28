
  const Navbar = ({navState, setNavState}) => {

 
  return (
    <nav className="navbar">

      <div className="links"  >
        
        <div  className='nav' onClick={() => setNavState("All")} 
        style={{
          padding: "0.8rem",
          cursor: "pointer",
          borderBottom: navState === "All" ? ' 3px solid #2F80ED' : ''}} 
          >All</div>
        <div className='nav' onClick={() => setNavState("Active")}
         style={{
          padding: "0.8rem",
          cursor: "pointer",
          borderBottom: navState === "Active" ? '3px solid #2F80ED' : '' }}
          
          >Active</div>
        <div className='nav'  onClick={() =>setNavState("Completed")} 
        style={{
          padding: ".8rem",
          cursor: "pointer",
          borderBottom: navState === "Completed" ? '3px solid #2F80ED' : ''}}
         
          >Completed</div>

      </div>
    </nav>
  );
}
 
export default Navbar;