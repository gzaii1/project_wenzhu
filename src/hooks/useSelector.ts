import { useContext } from 'react'
import { useLocalObservable } from 'mobx-react-lite'
import { RootStoreType, storeContext } from '../store'

export const useSelector = <Selection>(storeDispatcher: (store: RootStoreType) => Selection) => {
    const store = useContext(storeContext)
    if (!store) throw new Error('useContext: error')
    return useLocalObservable(() => storeDispatcher(store))
}
