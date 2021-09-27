import * as React from 'react'
import { types, Instance } from 'mobx-state-tree'

export interface IDialogModel extends Instance<typeof DialogHeapModel> {}

export interface IDialog {
    title?: string;
    message?: string;
    buttons?: [React.ReactNode | null ] | [];
}
const DialogModel = types
    .model({
        title: types.optional(types.maybeNull(types.string), ''),
        message: types.optional(types.maybeNull(types.string), ''),
        buttons: types.optional(types.array(
            types.maybeNull(types.optional(types.frozen<React.ReactNode>(), undefined))
        ), []),
    })
export const DialogHeapModel = types
    .model({
        heap: types.array(DialogModel),
    })
    .actions((self) => {
        function push(dialog: IDialog) {
            self.heap.push(dialog)
        }
        return {
            push,
        }
    })
