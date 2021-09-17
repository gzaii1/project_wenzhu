import React, { useEffect }  from 'react'
import { observer } from 'mobx-react-lite'
import { useSelector } from '../../hooks'
import { Card } from '@components'
import styles from './styles.module.scss'

const Article: React.FC = observer((props) => {
    const ArticleListModel = useSelector(state => state.ArticleListModel)
    
    useEffect(() => {
        // 获取article列表
        ArticleListModel.getArticles()
    }, []);

    const articleRender = () => {
        return ArticleListModel.articles.map(article => {
            return <Card key={article.id} title={article.title} text={article.text}/>
        })
    }
    return <div className={styles.article}>
        { articleRender() }
    </div>
})

export default Article
