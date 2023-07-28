import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import './HeaderStyle.css'
import logo from '../../assets/img/LaNourLogo.jpg'

const Header = () => {
    return (
        <header>
            <NavBar logo={logo} list={["Home", "ِAbout", "Sign Up", "Log In"]}/>
            <Hero title="Welcome to the world of Resin art"
                subTitle="Create your gifts and make them special!"
                button="Order your gift now"/>
        </header>
    )
}

export default Header