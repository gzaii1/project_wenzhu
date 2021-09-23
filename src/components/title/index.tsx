import { createPortal } from 'react-dom'

export const Title = ({ children }) =>
    createPortal(<>{ children }</>, document.querySelector('title'))
