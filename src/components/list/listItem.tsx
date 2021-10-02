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

const { useState } = React

const Item: React.FC<IListItem> = (props) => {
    const [imgLoaded, setLoaded] = useState(false)
    const {
        title,
        text,
        imgUrl,
        author,
        createTime,
    } = props
    const handleImgLoaded = e => e.isTrusted && setLoaded(true)

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
                    <Tag style={{ marginRight: 10}}>热门推荐</Tag>
                    <Tag style={{ marginRight: 10}}>恶搞</Tag>
                    <Tag style={{ marginRight: 10}}>体育</Tag>
                </div>

                <div>
                    <img src={bookmark} alt="" />
                    <img src={more} alt="" />
                </div>
            </div>
        </article>

        <img
            src={imgUrl}
            className={styles.thumbnail}
            alt=""
            onLoad={handleImgLoaded}
            style={{visibility: imgLoaded ? 'visible' : 'hidden'}}
        />
    </section>
}

export default Item