import * as React from 'react'
import styles from './styles.module.scss'

const footerOptions = [
    { title: 'Help' },
    { title: 'Status' },
    { title: 'Writers' },
    { title: 'Blog' },
    { title: 'Careers' },
    { title: 'Privacy' },
    { title: 'Terms' },
    { title: 'About' },
]

export const Footer = () => {
    return <footer className={styles.footer}>
        { footerOptions.map(({ title }) => <a href="#" key={title}>{ title }</a>) }
    </footer>
}