import React from 'react'
import { observer } from 'mobx-react-lite'
import { useSelector } from '../../hooks'
import styles from './styles.module.scss'

const Home: React.FC = observer((props) => {
    console.log('props:', props)
    const homeModel = useSelector(state => state.HomeModel)

    return <div className={styles.home}>
        { homeModel.name }
        <button onClick={() => {
            homeModel.setName(`${Math.random()}`)
        }}>set name</button>
    </div>
})

export default Home

