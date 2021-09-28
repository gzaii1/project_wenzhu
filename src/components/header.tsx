import * as React from 'react'
import { useSelector } from '@hooks'

export const Header:React.FC = ({ children }) => {
    const store = useSelector(state => state.HomeModel)

    React.useEffect(() => {
        console.log('header:', store)
    }, [store])
    return <header>
        {/* 这里是头部 */}
    </header>
}