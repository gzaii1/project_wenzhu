import { Title } from '@components'
import home from '@static/home.png'
import styles from './styles.module.scss'

const Header = () => {
    return <>
        <Title>文章</Title>
        {/* 头部 */}
        <header className={styles.header}>
            <div>
                <img className={styles.icon} src={home} alt="" />
                <h2>Wenzhu</h2>
            </div>
        </header>

        <div className={styles.fakeHeader}>
            <input type="text" />
        </div>

        <div className={styles.realHeader}>
            <div>Wenzhu</div>
        </div>
        </>
}

export default Header
