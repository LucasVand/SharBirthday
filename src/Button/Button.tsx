import './Button.css'
interface ClickObjProps {
    width: number
    height: number
    onClick?: Function
    children?: React.ReactNode
}
function ClickObj(props: ClickObjProps) {
    const invokeFunc = () => {
        if (props.onClick != undefined) {
            props.onClick()
        }
    }
    return (
        <>
            <button className='buttonCont' style={{ height: `${props.height}em`, width: `${props.width}em`, borderRadius: `${props.width / 10}em` }} onClick={invokeFunc}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    {props.children}
                </div>
            </button>
        </>
    )
}
export default ClickObj