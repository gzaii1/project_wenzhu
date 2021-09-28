import { useSelector } from '@hooks'
import { observer } from 'mobx-react-lite'
import styles from './styles.module.scss'
import Box from './dialogBox'

export const Dialog = observer(() => {
    const { heap } = useSelector(state => state.DialogModel)

    return <section  className={styles.dialog}>
        { heap.map((val, idx) => <Box key={idx} title={val.title} message={''} buttons={[]} />).reverse() }
    </section>
})
