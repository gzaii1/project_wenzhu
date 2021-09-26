import { IDialog } from '../../store/Dialog.model'
import { useState, useEffect, useRef } from 'react'

const Box = (props: IDialog) => {
    const [visible, setVisible] = useState(false)
    const closedRef = useRef(false)
    useEffect(() => {
        !closedRef.current && visible === false && setVisible(true)
    }, [visible])
    return <section data-status={visible}>
        <div>
            <header>
                { props.title }
                <button onClick={() => (closedRef.current = true) && setVisible(false)}>x</button>
            </header>
        </div>
    </section>
}

export default Box