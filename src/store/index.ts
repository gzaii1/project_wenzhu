import { types } from 'mobx-state-tree'
import { HomeModel } from './Home.model'

export type RootStoreType = typeof RootStoreModel.Type

export const RootStoreModel = types.model('RootStore', {
    HomeModel: types.optional(HomeModel, {}),
})

const RootStore = RootStoreModel.create({})

export default RootStore