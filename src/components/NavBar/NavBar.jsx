import './NavBarStyle.css'

const NavBar = ({logo, list}) => {
  return (
    <nav>
        <img src={logo} alt='La Nour'></img>
        <ul className='nav-items'>
          {list.map((item) => <li key={item.id}><a href="#">{item}</a></li>)}
        </ul>
    </nav>
  )
}

export default NavBar