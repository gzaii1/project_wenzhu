/* eslint-disable react-hooks/exhaustive-deps */
import * as React  from 'react'
import { observer } from 'mobx-react-lite'
import { useSelector, useArticleControl } from '@hooks'
import { Detail, Floating } from '@components'
import { RouteComponentProps } from 'react-router-dom'
import Header from './header'
import Left from './left'
import Right from './right'
import styles from './styles.module.scss'

const { useEffect } = React

const Article: React.FC<RouteComponentProps> = observer((props) => {
    const { getArticles } = useSelector(state => state.ArticleListModel)
    const { visible, article } = useArticleControl()

    useEffect(() => {
        // 获取article列表
        getArticles()
    }, [])

    return <div id="article" className={styles.article}>
        <Header />
        {/* 主体区域 */}
        <section className={styles.main}>
            <Left />
            <Right />
        </section>
        <Floating />
        
        {/* 文章主题弹窗, 之后做组件分离 */}
        <Detail
            visible={visible}
            article={article}    
        />
    </div>
})

export default Article
