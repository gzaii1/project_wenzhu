import * as React from 'react'
import styles from './styles.module.scss'

interface ITag {
    style?: React.CSSProperties,
    children?: React.ReactNode, 
}
export const Tag: React.FC<ITag> = (props) => {
    const { 
        style,
        children,
    } = props
    return <section
            style={style}
            className={styles.tag}>
                { children }
            </section>
}