import * as React from 'react'
import Item, { IListItem } from './listItem'
import { observer } from 'mobx-react-lite'
import styles from './styles.module.scss'
import { useSelector } from '@hooks'
interface IList {
    dataSource: Array<IListItem>,
}
const { useEffect, useRef } = React
export const List: React.FC<IList> = observer((props) => {
    const { dataSource } = props
    const { setListHeight } = useSelector(state => state.CommonModel)
    const listRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        listRef.current && setListHeight(listRef.current.offsetHeight)
    }, [listRef.current && listRef.current.offsetHeight])

    return <section className={styles.list} ref={listRef}>
        {dataSource.map((item, idx) => {
            return <Item key={idx} {...item} />
        })}
    </section>
})
