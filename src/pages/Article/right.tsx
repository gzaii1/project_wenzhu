import * as React from 'react'
import { Activity, Topics, Authors } from '@components'
import styles from './styles.module.scss'
import { useSelector } from '@hooks'
import { observer } from 'mobx-react-lite'

const Right = observer((props) => {
    const { listHeight } = useSelector(state => state.CommonModel)

    return <div className={styles.right} style={{ height: listHeight }}>
        <Activity />
        <div className={styles.workstation}>
            <Topics />
            <Authors />
        </div>
    </div>
})

export default Right