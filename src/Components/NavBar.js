const NavBar = ({setPage}) => {
    return ( 

        <nav style={{textAlign:"center"}}>
            <button onClick={()=>setPage('planets')}>Planets</button>
            <button onClick={()=>setPage('peoples')}>Peoples</button>
        </nav>
     );
}
 
export default NavBar;