import React from 'react'
import { observer } from 'mobx-react-lite'
import { useSelector } from '@hooks'
import styles from './styles.module.scss'
import { Title } from '@components'

const Home: React.FC = observer((props) => {
    const homeModel = useSelector(state => state.HomeModel)

    return <div className={styles.home}>
        <Title>首页</Title>
        { homeModel.name }
        <button onClick={() => {
            homeModel.setName(`${Math.random()}`)
        }}>set name</button>
    </div>
})

export default Home

