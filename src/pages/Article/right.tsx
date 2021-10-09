import * as React from 'react'
import { Activity, Topics, Authors } from '@components'
import styles from './styles.module.scss'
import { observer } from 'mobx-react-lite'

const Right = observer((props) => {
    return <div className={styles.right}>
        <Activity />
        <div className={styles.workstation}>
            <Topics />
            <Authors />
            <button onClick={() => {
                document.querySelector('#article').scrollTop = 0
            }}>回到首部</button>
        </div>
    </div>
})

export default Right