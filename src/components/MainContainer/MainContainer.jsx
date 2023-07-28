import './MainContainerStyle.css'
import SubContainer from '../SubContainer/SubContainer'
import firstPic from './../../assets/img/KeyChain.jpg'
import SecPic from './../../assets/img/Coaster.jpg'
import thirdPic from './../../assets/img/Painting.jpg'
import { useState } from 'react'

const MainContainer = () => {
  const [firstTitle] = useState("Key Chains");
    const [FirstDesc] = useState("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error sequi placeat consequuntur rem suscipit rerum alias similique nihil recusandae quia quibusdam distinctio maxime explicabo, aut voluptatibus ipsum velit, cumque impedit!");
    const [secTitle] = useState("Coasters");
    const [secDesc] = useState("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error sequi placeat consequuntur rem suscipit rerum alias similique nihil recusandae quia quibusdam distinctio maxime explicabo, aut voluptatibus ipsum velit, cumque impedit!");
    const [thirdTitle] = useState("Paintings");
    const [thirdDesc] = useState("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error sequi placeat consequuntur rem suscipit rerum alias similique nihil recusandae quia quibusdam distinctio maxime explicabo, aut voluptatibus ipsum velit, cumque impedit!");
  return (
    <div className='maincontainer'>
        <h1 className='title'>Our Products</h1>
        <p className='sec-title'>Tours dive you the opportunity to see a lot, within a time frame.</p>
        <SubContainer firstPic = {firstPic}
        title = {firstTitle}
        desc = {FirstDesc}
        reverse={true}  />
        <SubContainer firstPic = {SecPic}
        title = {secTitle}
        desc = {secDesc}
        reverse={false}  />
        <SubContainer firstPic = {thirdPic}
        title = {thirdTitle}
        desc = {thirdDesc}
        reverse={true}  />
        <div className='container-footer'>
          <div className='info'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href='#'>Order Now!</a>
          </div>
          <button>Get Started</button>
        </div>
    </div>
  )
}

export default MainContainer