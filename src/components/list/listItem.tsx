import * as React from 'react'
import dayjs, { Dayjs } from 'dayjs'
import admin from '@static/admin.png';
import bookmark from '@static/bookmark.png';
import more from '@static/more.png';
import styles from './styles.module.scss'
import { Tag } from '@components'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

export interface IListItem {
    id?: string,
    key?: any,
    imgUrl?: string,
    title: string,
    text: string,
    author: string,
    createTime: Dayjs,
}

const Item: React.FC<IListItem> = (props) => {
    const {
        title,
        text,
        imgUrl,
        author,
        createTime,
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
            <div className={styles.config}>
                <span> { createTime.format('MM-DD-YYYY') } </span>
                
                <div className={styles.tags}>
                    <Tag />
                    <Tag />
                </div>

                <div>
                    <img src={bookmark} alt="" />
                    <img src={more} alt="" />
                </div>
            </div>
        </article>
        <img src={imgUrl} alt="" />
    </section>
}

export default Item