import { types, Instance, flow } from 'mobx-state-tree'
import { request } from '@utils'

export interface IAuthorModel extends Instance<typeof AuthorModel> {}
export interface IAuthorAssemblyModel extends Instance<typeof AuthorAssemblyModel> {}

export const AuthorModel = types
    .model({
        id: types.optional(types.string, ''),
        name: types.optional(types.string, ''),
        introduction: types.optional(types.string, ''),
        avatar: types.optional(types.string, ''),
    })

export const AuthorAssemblyModel = types
    .model({
            authors: types.array(types.frozen<IAuthorModel>()),
    })
    .actions((self) => {
        const getAuthors = flow(function*() {
            const result = yield request('/authors')
            self.authors = result.data
        })
        return { getAuthors }
    })
