import { types, Instance } from 'mobx-state-tree'

export interface ICreationModel extends Instance<typeof CreationModel> {}
export const CreationModel = types
    .model({
        // name: types.optional(types.string, 'alex'),
    })
