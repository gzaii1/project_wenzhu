/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect }  from 'react'
import { observer } from 'mobx-react-lite'
import { useSelector, useArticleControl } from '@hooks'
import { Card, Tag } from '@components'
import {RouteComponentProps } from 'react-router-dom'
import styles from './styles.module.scss'

const Article: React.FC<RouteComponentProps> = observer((props) => {
    const ArticleListModel = useSelector(state => state.ArticleListModel)

    const { visible, article } = useArticleControl()
    useEffect(() => {
        // 获取article列表
        ArticleListModel.getArticles()
    }, []);

    const articleRender = () => {
        return ArticleListModel.articles.map(article => {
            return <Card 
                    key={article.id} 
                    title={article.title} 
                    text={article.text}
                />
        })
    }
    return <div className={styles['article']}>
        <label>
            <input type="text" placeholder="输入你的tag"/>
        </label>
        
        <Tag />
        <div className={styles['article-wrapper']}>
            { articleRender() }
        </div>

        <button>换一组</button>

        {/* 文章主题弹窗, 之后做组件分离 */}
        {
            visible &&
            <div className="modal">
                {article.text}
            </div>
        }
    </div>
})

export default Article
