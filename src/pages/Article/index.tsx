import React from 'react'
import { observer } from 'mobx-react-lite'
// import { useSelector } from '../../hooks'
import styles from './styles.module.scss'

const Article: React.FC = observer((props) => {
    // const homeModel = useSelector(state => state.HomeModel)

    return <div className={styles.article}>
        article
    </div>
})

export default Article

