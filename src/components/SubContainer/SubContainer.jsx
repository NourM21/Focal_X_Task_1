import './SubContainerStyle.css'

const SubContainer = ({firstPic , title , desc , reverse}) => {
    return (
        <div className={(reverse) ? "container reverse" : "container"} >
            <div className="imgs">
                <img src={firstPic} alt="" />
            </div>
            <div className="info">
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default SubContainer