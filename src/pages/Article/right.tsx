import * as React from 'react'
import { Activity, Topics, Authors, Footer } from '@components'
import styles from './styles.module.scss'
import { observer } from 'mobx-react-lite'

const Right = observer((props) => {
    return <div className={styles.right}>
        <Activity />
        <div className={styles.workstation}>
            <Topics />
            <Authors />
            <Footer />
        </div>
    </div>
})

export default Right