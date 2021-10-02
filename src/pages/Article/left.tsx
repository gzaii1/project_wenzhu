/* 左侧区域 */
import * as  React from 'react'
import { observer } from 'mobx-react-lite'
import { useSelector } from '@hooks'
import { Card, Tag } from '@components'
import { dialog } from '@utils'
import styles from './styles.module.scss'
    
const Left = observer(() => {
    const { articles } = useSelector(state => state.ArticleListModel)
    const { theme, setTheme } = useSelector(state => state.CommonModel)

    const articleRender = () => {
        return articles.map(article => {
            return <Card
                    key={article.id} 
                    title={article.title}
                    text={article.text}
                    coverPicUrl={article.coverPicUrl}
                />
        })
    }

    return <div className={styles['left']}>
        <label>
            <input type="text" placeholder="输入你的tag"/>
        </label>
        
        <Tag />
        <div className={styles['hot-search']}>
            { articleRender() }
        </div>

        <button onClick={() => {
            setTheme(theme === 'default' ? 'cheerful' : theme === 'cheerful' ? "business" : theme === 'business' ? 'default' : 'default')
        }}>换一组:{theme}</button>
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