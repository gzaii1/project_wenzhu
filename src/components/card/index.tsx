import React from 'react'
import styles from './styles.module.scss'
import { useHistory } from 'react-router'
export const Card: React.FC<ICard> = (props) => {
    const {
        title,
        text,
        style={},
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
            <div className={styles.body}>
                <span>{ text }</span>
            </div>
        </header>
    </div>
}

interface ICard {
    title: string,
    text: string,
    style?: object;
}