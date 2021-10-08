import React from 'react'
import styles from './styles.module.scss'
import { useDialog } from '@hooks'
export const Card: React.FC<ICard> = (props) => {
    const {
        title,
        text,
        style,
        imgUrl,
    } = props
    const { show } = useDialog()
    
    return <div
            style={style}
            className={styles.wrapper}
            onClick={() => {
                show({ title: `${Math.random()}` })
            }}>
        <header className={styles.header}>
            <span>{ title }</span>
            { imgUrl && <div style={imgUrl ? { backgroundImage: `url(${imgUrl})` } : { }} /> }
        </header>
        <div className={styles.body}>
                <span>{ text }</span>
        </div>
    </div>
}

interface ICard {
    title: string,
    text: string,
    style?: React.CSSProperties;
    imgUrl?: string, 
}