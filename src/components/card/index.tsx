import React from 'react'
import styles from './styles.module.scss'

export const Card: React.FC<ICard> = (props) => {
    const {
        title,
        text,
    } = props
    return <div className={styles.wrapper}>
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
}