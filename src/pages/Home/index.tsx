import React from 'react'
import { observer } from 'mobx-react-lite'
import styles from './styles.module.scss'
import { useSelector } from '../../hooks'

const Home: React.FC = observer(() => {
    const homeModel = useSelector(state => state.HomeModel)

    return <div className={styles.home}>
        { homeModel.name }
        <button onClick={() => {
            homeModel.setName(`${Math.random()}`)
        }}>set name</button>
    </div>
})

export default Home

