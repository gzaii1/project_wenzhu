/* 左侧区域 */
import * as  React from 'react'
import { observer } from 'mobx-react-lite'
import { useSelector } from '@hooks'
import { List } from '@components'
import { dialog } from '@utils'
import dayjs from 'dayjs'
import styles from './styles.module.scss'
    
const Left = observer(() => {
    const { articles } = useSelector(state => state.ArticleListModel)
    const dataSource = articles.map(item => ({
        title: item.title,
        text: item.text,
        imgUrl: item.coverPicUrl,
        author: item.author,
        createTime: dayjs(item.createTime),
    }))

    return <div className={styles['left']}>
        <div className={styles['hot-search']}>
            <List dataSource={dataSource}/>
        </div>
        <button onClick={() => {
            dialog().show({
                title: `${Math.random() * 1000 | 0}`,
                message: '',
                buttons: [null]
            })
        }}>触发dialog</button>
    </div>
})

export default Left