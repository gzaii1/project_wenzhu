import { types, Instance, flow } from 'mobx-state-tree'

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
            articles: types.array(types.optional(ArticleModel, {})),
    })
    .actions((self) => {
        const getArticles = flow(function*() {
            let post = yield fetch('http://localhost:5000/api/articles').then(res => res.json())
            self.articles = post;
        })
        return {
            getArticles,
        }
    })
