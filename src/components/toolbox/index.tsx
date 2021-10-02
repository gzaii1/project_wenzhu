import * as React from 'react'
import { observer } from 'mobx-react-lite'
import { useSelector } from '@hooks'
import styles from './styles.module.scss'

interface IToolbox {
    style?: React.CSSProperties,
    children?: React.ReactNode,
    size?: string;
}

export const Toolbox: React.FC<IToolbox> = observer((props) => {
    const { style, size='normal' } = props
    const { theme, setTheme } = useSelector(state => state.CommonModel)
    const handleThemeChange = () => {
        setTheme(theme === 'default' ? 'cheerful' : theme === 'cheerful' ? "business" : theme === 'business' ? 'default' : 'default')
    }

    return <div className={styles.toolbox} style={style}>
        <i className="flaticon-loupe"></i>
        <i className="flaticon-bookmark"></i>
        <i className="flaticon-email"></i>
        <i className="flaticon-theme" onClick={handleThemeChange}></i>
        { size === 'normal' && <button>Upgrade</button> }
        <div className={styles.user}>
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fd24bab299ca9f8af7ffc86ced948c6becbec9ee1.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1635774835&t=ec95fc1b2d4c244163579548a47e23e7" alt="" />
        </div>
    </div>
})
