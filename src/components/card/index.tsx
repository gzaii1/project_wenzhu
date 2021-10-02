import React from 'react'
import styles from './styles.module.scss'
import { useHistory } from 'react-router'
export const Card: React.FC<ICard> = (props) => {
    const {
        title,
        text,
        style,
        coverPicUrl,
    } = props
    const history = useHistory()
    return <div
            style={style}
            className={styles.wrapper}
            onClick={() => {
                history.push({
                    search: title
                })
            }}>
        <header className={styles.header}>
            <span>{ title }</span>
            { coverPicUrl && <div style={coverPicUrl ? { backgroundImage: `url(${coverPicUrl})` } : { }} /> }
        </header>
        <div className={styles.body}>
                <span>{ text }</span>
        </div>
    </div>
}

interface ICard {
    title: string,
    text: string,
    style?: object;
    coverPicUrl?: string, 
}