import { useContext } from 'react'
import { storeContext } from '../App'
import { useLocalObservable } from 'mobx-react-lite'

export const useSelector = (selection: Function) => {
    const store: any = useContext(storeContext)
    if (!store) throw new Error('错误的全局context');
    return useLocalObservable(() => selection(store))
}
