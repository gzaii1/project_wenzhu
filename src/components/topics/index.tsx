import * as React from 'react'
import { Tag } from '@components'
import styles from './styles.module.scss'

const TagStyle: React.CSSProperties = {
    marginRight: `1em`,
    marginBottom: `10px`
}
export const Topics = () => {
    return <section className={styles.topics}>
        <h2>推荐话题</h2>
        <div className={styles.wrapper}>
            <Tag style={TagStyle}>热门推荐</Tag>
            <Tag style={TagStyle}>修仙</Tag>
            <Tag style={TagStyle}>江湖武林</Tag>
            <Tag style={TagStyle}>中世纪</Tag>
            <Tag style={TagStyle}>恐怖故事</Tag>
            <Tag style={TagStyle}>古典小说</Tag>
            <Tag style={TagStyle}>清宫剧</Tag>
            <Tag style={TagStyle}>都市恋爱</Tag>
            <Tag style={TagStyle}>悬疑剧/推理剧</Tag>
            <Tag style={TagStyle}>猎奇</Tag>
        </div>
    </section>
}