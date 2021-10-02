import { Card } from '@components'
import styles from './styles.module.scss'

const Right = () => {
    return <div className={styles['right']}>
    <Card
        title={'标题'}
        text={'hello'}
        style={{width: '100%'}}
    ></Card>

    <Card
        title={'测试'}
        text={'hello'}
        style={{width: '100%', position: 'sticky', top : 50}}
    ></Card>
    </div>
}

export default Right