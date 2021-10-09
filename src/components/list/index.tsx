import * as React from 'react'
import Item, { IListItem } from './listItem'
import { observer } from 'mobx-react-lite'
import styles from './styles.module.scss'
interface IList {
    dataSource: Array<IListItem>,
}
const { useRef } = React
export const List: React.FC<IList> = observer((props) => {
    const { dataSource } = props
    const listRef = useRef<HTMLDivElement>(null)

    return <section className={styles.list} ref={listRef}>
        {dataSource.map((item, idx) => {
            return <Item key={idx} {...item} />
        })}
    </section>
})
