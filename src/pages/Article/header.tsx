import { Title } from '@components'
import styles from './styles.module.scss'

const Header = () => {
    return <>
    <Title>文章</Title>
        {/* 头部 */}
        <header className={styles['header']}>
            头部
        </header></>
}

export default Header