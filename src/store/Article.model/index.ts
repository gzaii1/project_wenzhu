import { types, Instance, flow } from 'mobx-state-tree'
import { request } from '@utils'

export interface IArticleModel extends Instance<typeof ArticleModel> {}
export interface IArticleListModel extends Instance<typeof ArticleListModel> {}

export const ArticleModel = types
    .model({
        id: types.optional(types.string, ''),
        title: types.optional(types.string, ''),
        author: types.optional(types.string, ''),
        createTime: types.optional(types.string, ''),
        lastUpdateTime: types.optional(types.string, ''),
        text: types.optional(types.string, ''),
    })

export const ArticleListModel = types
    .model({
            articles: types.array(types.frozen<IArticleModel>()),
    })
    .actions((self) => {
        const getArticles = flow(function*() {
            const result = yield request('/articles')
            self.articles = result
        })

        const getArticleById = flow(function* (id: string) {
            return yield request('/article/id')
        })

        return {
            getArticles,
            getArticleById,
        }
    })
