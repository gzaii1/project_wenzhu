import { Title, Toolbox } from '@components'
import home from '@static/home.png'
import styles from './styles.module.scss'

const Header = () => {
    return <>
        <Title>文章</Title>
        {/* 头部 */}
        <header className={styles.header}>
            <div>
                <h2>
                    <img className={styles.icon} src={home} alt="" />Wenzhu
                </h2>
                <Toolbox style={{ width: 300, marginRight: 30 }}/>
            </div>
        </header>

        <div className={styles.fakeHeader}>
            {/* <input type="text" /> */}
        </div>

        <div className={styles.realHeader}>
            <div>Wenzhu</div>
            <Toolbox
                size='small'
                style={{ width: 300, fontSize: 14, marginRight: 60 }}
            />
        </div>
        </>
}

export default Header
