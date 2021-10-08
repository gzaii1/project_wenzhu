import * as React from 'react'
import { useSelector } from '@hooks'
import styles from './styles.module.scss'

const { useEffect } = React

export const Authors = () => {
    const { getAuthors, authors } = useSelector(state => state.AuthorModel)
    useEffect(() => void getAuthors(), [])

    return <section className={styles.authors}>
        <h2>热门作家</h2>
        <ul className={styles.wrapper}>
            { 
                authors.map(author => {
                    const { id, name, introduction, avatar } = author
                    return <li key={id}>
                            <div className={styles.avatar}>
                                <img src={avatar} alt={`${name}头像`} />
                            </div>
                            <div className={styles.detail}>
                                <span>{ name }</span>
                                <p>{ introduction }</p>
                            </div>
                            <button>关注</button>
                        </li>
                }) 
            }
        </ul>
    </section>
}