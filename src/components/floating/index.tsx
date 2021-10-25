import * as React from 'react'
import styles from './styles.module.scss'

export const Floating: React.FC<IFloating> = ({ top, left, right, bottom }) => {
    return <div className={styles.floating}>写</div>
}

interface IFloating {
    top?: number | string,
    right?: number | string,
    bottom?: number | string,
    left?: number | string,
}