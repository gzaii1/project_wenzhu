import { createContext } from 'react'
import { types } from 'mobx-state-tree'
import { CommonModel } from './Common.model'
import { HomeModel } from './Home.model'
import { ArticleModel, ArticleListModel } from './Article.model'
import { DialogHeapModel } from './Dialog.model'
import { CreationModel } from './Creation.model'

export type RootStoreType = typeof RootStoreModel.Type

export const RootStoreModel = types.model('RootStore', {
    CommonModel: types.optional(CommonModel, {}),
    HomeModel: types.optional(HomeModel, {}),
    ArticleModel: types.optional(ArticleModel, {}),
    ArticleListModel: types.optional(ArticleListModel, {}),
    DialogModel: types.optional(DialogHeapModel, {}),
    CreationModel: types.optional(CreationModel, {}),
})

const RootStore = RootStoreModel.create({})
export const storeContext = createContext<RootStoreType | null>(null)
export default RootStore
