import './FooterStyle.css'

const Footer = ({logo, list, social, text}) => {
  return (
    <footer>
      <div className='footer-nav'>
        <img src={logo} alt='LaNour Logo'></img>
        <ul className='footer-nav-items'>
          {list.map((item) => <li key={item.id}><a href="#">{item}</a></li>)}
        </ul>
      </div>
      <div className>
        <ul className='footer-social-items'>
          {social.map((item) => <li key={item.id}><a href="#"><i className={item}></i></a></li>)}
        </ul>
      </div>
      <p>{text}</p>
    </footer>
  )
}

export default Footer