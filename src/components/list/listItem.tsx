import * as React from 'react'
import admin from '@static/admin.png';
import styles from './styles.module.scss'

export interface IListItem {
    id?: string,
    key?: any,
    imgUrl?: string,
    title: string,
    text: string,
    author: string,
}

const Item: React.FC<IListItem> = (props) => {
    const {
        title,
        text,
        imgUrl,
        author,
    } = props

    return <section className={styles.item}>
        <article>
            <header>
                <h4>
                    <img src={admin} alt="" />{ author }
                </h4>
            </header>
            <h2>{ title }</h2>
            <p> { text } </p>
            <div className={styles.msgBox}>其他信息</div>
        </article>
        <img src={imgUrl} alt="" />
    </section>
}

export default Item