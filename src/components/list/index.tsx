import * as React from 'react'
import Item, { IListItem } from './listItem'
import { observer } from 'mobx-react-lite'
import styles from './styles.module.scss'

interface IList {
    dataSource: Array<IListItem>,
}

export const List: React.FC<IList> = observer((props) => {
    const { dataSource } = props
    return <section className={styles.list}>
        {dataSource.map((item, idx) => {
            const key = item.key ? item.key: item.id ? item.id : idx
            return <Item key={key} {...item} />
        })}
    </section>
})
