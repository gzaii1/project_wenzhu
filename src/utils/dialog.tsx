import store from '@store'
import { IDialog } from '@store/Dialog.model'

type DialogType = {
    show: (msg: IDialog) => void
}

export const dialog = (): DialogType => {
    if (store && store.DialogModel) {
        return {
            show: store.DialogModel.push,
        }
    } else {
        return { show: () => {
            throw new Error('未发现DialogModel')
        }}
    }
}