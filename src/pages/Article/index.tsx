/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect }  from 'react'
import { observer } from 'mobx-react-lite'
import { useSelector, useArticleControl } from '@hooks'
import { Card, Tag, Detail, Title } from '@components'
import { RouteComponentProps } from 'react-router-dom'
import { dialog } from '@utils'
import styles from './styles.module.scss'

const Article: React.FC<RouteComponentProps> = observer((props) => {
    const { getArticles, articles } = useSelector(state => state.ArticleListModel)
    const { theme, setTheme } = useSelector(state => state.CommonModel)
    const { visible, article } = useArticleControl()

    useEffect(() => {
        // 获取article列表
        getArticles()
    }, [])

    const articleRender = () => {
        return articles.map(article => {
            return <Card 
                    key={article.id} 
                    title={article.title} 
                    text={article.text}
                />
        })
    }
    return <div className={styles['article']}>
        <Title>文章</Title>
        {/* 头部 */}
        <header className={styles['header']}>
            头部
        </header>
        
        <section className={styles['wrapper']}>
            {/* 左侧区域 */}
            <div className={styles['left']}>
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


            <div className={styles['main']}>
                中心区域
            </div>


            <div className={styles['right']}>
                右侧
            </div>
        </section>
        
        
        {/* 文章主题弹窗, 之后做组件分离 */}
        <Detail
            visible={visible}
            article={article}    
        />
    </div>
})

export default Article
