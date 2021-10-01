/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect }  from 'react'
import { observer } from 'mobx-react-lite'
import { useSelector, useArticleControl } from '@hooks'
import { Card, Detail, Title } from '@components'
import { RouteComponentProps } from 'react-router-dom'
import Left from './left'
import styles from './styles.module.scss'

const Article: React.FC<RouteComponentProps> = observer((props) => {
    const { getArticles } = useSelector(state => state.ArticleListModel)
    const { visible, article } = useArticleControl()

    useEffect(() => {
        // 获取article列表
        getArticles()
    }, [])

    return <div className={styles['article']}>
        <Title>文章</Title>
        {/* 头部 */}
        <header className={styles['header']}>
            头部
        </header>
        {/* 主体区域 */}
        <section className={styles['wrapper']}>
            {/* 左侧区域 */}
            <Left />
            <div className={styles['middle']}>
                中心区域
            </div>
            <div className={styles['right']}>
                <Card
                    title={'标题'}
                    text={'hello'}
                ></Card>
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
