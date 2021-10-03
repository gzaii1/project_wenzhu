import styles from './styles.module.scss'

export const Activity = () => {
    return <div className={styles.activity}>
        <h2>最近浏览</h2>
        <div className={styles.wrapper}>
            暂无浏览记录
        </div>
    </div>
}
