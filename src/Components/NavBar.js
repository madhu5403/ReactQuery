const NavBar = ({setPage}) => {
    return ( 

        <nav>
            <button onClick={()=>setPage('planet')}>Planet</button>
            <button onClick={()=>setPage('people')}>Planet</button>
        </nav>
     );
}
 
export default NavBar;