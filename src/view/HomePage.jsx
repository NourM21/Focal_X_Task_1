import Header from '../components/Header/Header'
import MainContainer from '../components/MainContainer/MainContainer'
import Footer from '../components/Footer/Footer'
import logo from '../assets/img/LaNourLogo.jpg'

const HomePage = () => {
  return (
    <div>
        <Header />
        <MainContainer />
        <Footer logo={logo} list={["Home", "ِAbout", "Sign Up", "Log In"]}
        social={["fa fa-facebook-square", "fa fa-instagram"]}
        text="© Copyright 2023 La Nour. Powered with 💙 by Nour Mando"/>
    </div>
  )
}

export default HomePage