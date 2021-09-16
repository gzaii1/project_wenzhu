import { types, Instance } from 'mobx-state-tree'

export interface IHomeModel extends Instance<typeof HomeModel> {}
export const HomeModel = types
    .model({
        name: types.optional(types.string, 'alex'),
    })
    .actions((self) => {
        function setName(name: string) {
            self.name = name
        }
        return {
            setName,
        }
    })
