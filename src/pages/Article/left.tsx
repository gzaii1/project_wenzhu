/* 左侧区域 */
import * as  React from 'react'
import { observer } from 'mobx-react-lite'
import { useSelector } from '@hooks'
import { List } from '@components'
import dayjs from 'dayjs'
import styles from './styles.module.scss'
    
const { useRef, useEffect } = React
const Left = observer(() => {
    const { articles, loadMore } = useSelector(state => state.ArticleListModel)
    const loadRef = useRef<HTMLDivElement>(null)
    const dataSource = articles.map(item => ({
        title: item.title,
        text: item.text,
        imgUrl: item.coverPicUrl,
        author: item.author,
        createTime: dayjs(item.createTime),
    }))
    const handleScrollLoading = function (e) {
        const { top, height } = loadRef.current.getBoundingClientRect()
        const article = document.querySelector('#article')
        if (e.deltaY > 0 && document.documentElement.offsetHeight >= top + height / 2) {
            article.removeEventListener('wheel', handleScrollLoading)
            loadMore().then(() => {
                article.addEventListener('wheel', handleScrollLoading)  
            })
        }
    }
    useEffect(() => {
        const article = document.querySelector('#article')
        article.addEventListener('wheel', handleScrollLoading)
        return () => {
            article.removeEventListener('wheel', handleScrollLoading)
        }
    }, [])

    return <div className={styles.left}>
        <div className={styles.list}>
            <List dataSource={dataSource}/>
        </div>
        <div ref={loadRef} className={styles.loading}>loading...</div>
    </div>
})

export default Left