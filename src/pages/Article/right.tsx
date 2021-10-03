import { Card, Activity } from '@components'
import styles from './styles.module.scss'
import { useSelector } from '@hooks'
import { observer } from 'mobx-react-lite'
import * as React from 'react'

const Right = observer((props) => {
    const { listHeight } = useSelector(state => state.CommonModel)

    return <div className={styles.right} style={{ height: listHeight }}>
        <Activity />
    <Card
        title={'测试'}
        text={'hello'}
        style={{width: '100%', position: 'sticky', top : 50}}
    ></Card>
    </div>
})

export default Right