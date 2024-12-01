import './Box.css'
interface BoxProps {
    height: number
    width: number
    children?: React.ReactNode
}

function Box(props: BoxProps) {

    return (
        <>
            <div className='boxCont' style={{ height: `${props.height}em`, width: `${props.width}em`, borderRadius: `${props.width / 10}em` }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default Box