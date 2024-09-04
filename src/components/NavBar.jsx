 
import { NavLink } from "react-router-dom"

 

const NavBar = ({isActive}) => { 
  const NavBarStyles =({isActive}) => {
   return{
    textDecoration: isActive ? 'underline' : 'none',
    padding: '10px',
    margin: '10px',
    fontWeight: isActive ? 'bold' : 'normal',
    color: 'black',
    backgroundColor: 'lightgray',
    borderRadius : '5px'
   }
  }
  return (
    <nav className="nav">
      <NavLink style={NavBarStyles}  to='/' >Home</NavLink>
      <NavLink  style={NavBarStyles} to='/about'>About</NavLink>
      <NavLink style={NavBarStyles}  to='/contact'>Contact</NavLink>  
      <NavLink style={NavBarStyles}  to='/products'>Products</NavLink>  
    </nav>
  )
}

export default NavBar