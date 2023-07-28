import './HeroStyle.css'

const Hero = ({title, subTitle, button}) => {
  return (
    <div className='hero'>
      <div className='info'>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <button>{button}</button>
      </div>
    </div>
  )
}

export default Hero