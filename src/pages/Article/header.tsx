import { Title, Toolbox, Tag } from '@components'
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
            <label>
                <span>当前标签:</span>
                <Tag style={{ marginLeft: 10}}>热门推荐</Tag>
                <Tag style={{ marginLeft: 10}}>恶搞</Tag>
                <Tag style={{ marginLeft: 10}}>体育</Tag>
            </label>
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
