import { useEffect, useState } from 'react'
import { useSelector } from './useSelector'
import { useHistory } from 'react-router'
import { IArticleModel } from '../store/Article.model'

export interface IUseArticleControl {
    visible: boolean,
    article: IArticleModel,
}

export const useArticleControl = (): IUseArticleControl => {
    const history = useHistory()
    const [article, setArticle] = useState(null)
    const [visible, setVisible] = useState(false)

    const { getArticleById } = useSelector(state => state.ArticleListModel)

    useEffect(() => {
        setVisible(false)
        setArticle(null)
        if (!history.location.search) return;

        getArticleById(history.location.search)
            .then(res => {
                setArticle(res)
                setVisible(true)
            })
    }, [getArticleById, history.location.search]);
    
    return {
        visible,
        article,
    }
}