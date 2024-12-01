import './BackdropImg.css'
interface BackdropImgProps {
    img: string
    angle: number
    width: number
    selected: number | undefined
    index: number
    onClick: Function
}
function BackdropImg(props: BackdropImgProps) {
    const borderRadius = () => {
        return props.width / 10
    }
    const randomDelay = () => {
        return Math.random() * 5
    }
    const width = () => {

        return props.width
    }
    return (
        <>
            <img onClick={() => { props.onClick() }} className={`backdropImg ${props.selected == props.index ? "" : ""}`} src={props.img} style={{ width: `${width()}em`, borderRadius: `${borderRadius()}em`, transform: `rotate(${props.angle}deg)`, margin: `${props.width / 10}em`, borderWidth: `${props.width / 20}em`, animationDelay: `${randomDelay()}s` }}></img>
        </>
    )
}

export default BackdropImg