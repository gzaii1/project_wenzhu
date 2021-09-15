import { useContext } from 'react'
import { storeContext } from '../App'
import { useLocalObservable } from 'mobx-react-lite'
import { RootStoreType } from '../store'

export const useSelector = <Selection>(selection: (store: RootStoreType) => Selection) => {
    const store = useContext(storeContext)
    if (!store) throw new Error('错误的全局context');
    return useLocalObservable(() => selection(store))
}
