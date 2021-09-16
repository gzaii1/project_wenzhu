import { types, Instance } from 'mobx-state-tree'

export interface IArticleModel extends Instance<typeof ArticleModel> {}
export const ArticleModel = types
    .model({
            articles: types.array(
                types.model({
                    
                })
            ),
    })
    .actions((self) => {
        function getArticleList () {
            return [{}]
        }
        return {
            getArticleList,
        }
    })
