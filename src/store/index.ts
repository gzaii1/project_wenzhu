import { createContext } from 'react'
import { types } from 'mobx-state-tree'
import { HomeModel } from './Home.model'
import { ArticleModel, ArticleListModel } from './Article.model'

export type RootStoreType = typeof RootStoreModel.Type

export const RootStoreModel = types.model('RootStore', {
    HomeModel: types.optional(HomeModel, {}),
    ArticleModel: types.optional(ArticleModel, {}),
    ArticleListModel: types.optional(ArticleListModel, {}),
})

const RootStore = RootStoreModel.create({})
export const storeContext = createContext<RootStoreType | null>(null)
export default RootStore
