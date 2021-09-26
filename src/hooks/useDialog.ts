import { useSelector } from './useSelector'

export const useDialog = () => {
    const { push } = useSelector(state => state.DialogModel)
    return { show: push  }
}
