import React from 'react'
import { Observer } from 'mobx-react-lite'
import styles from './styles.module.scss'
import store from '../../store'
import { useSelector } from '../../hooks'

const Home: React.FC = () => {
    const homeModel = useSelector((state) => state.HomeModel)

    return <div className={styles.home}>
        <Observer>
            { () => <>{ store.HomeModel.name }</> }
        </Observer>
        <button onClick={() => {
            homeModel.setName('bob')
            // store2.setName('candy')
        }}>set name</button>
    </div>
}
export default Home

