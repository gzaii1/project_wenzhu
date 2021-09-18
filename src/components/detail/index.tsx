import * as React from 'react'
import { IArticleModel } from '../../store/Article.model'
import styles from './styles.module.scss'
import { useHistory } from 'react-router'
import { useCache } from '@hooks'
import classNames from 'classnames'

interface IDetail {
    visible: boolean;
    article: IArticleModel
}

export const Detail: React.FC<IDetail> = (props) => {
    const { visible, article } = props
    const history = useHistory()
    const cacheArticle: IArticleModel = useCache(article, () => true)

    const handleClose = () => {
        history.push({ search: null })
    }

    return <div data-visible={visible ? 'show' : 'hidden'} className={styles.container}>
        <header className={styles.header}>
            {cacheArticle?.title}
        </header>
        <article>
            { cacheArticle?.text }
        </article>
        
        <button onClick={handleClose}>关闭</button>
    </div>
}