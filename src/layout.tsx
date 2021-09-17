import { HashRouter } from 'react-router-dom'
import { Header } from './components'
import routes from './routes'
import './global.css'
import './styles/fonts.scss'

const Routes: React.ComponentType<any> = routes
const Router: React.ComponentType = HashRouter
const Layout = () => {
  return <main id="main">
    <Header />
    <Router>
        <Routes />
    </Router>
  </main>
}

export default Layout
