import { HashRouter } from 'react-router-dom'
import { Header } from './components'
import routes from './routes'
import './global.css'

const Routes: React.ComponentType<any> = routes
const Router: React.ComponentType = HashRouter
const Layout = () => {
  return <main id="main" data-theme="default">
    <Header />
    <Router>
        <Routes />
    </Router>
  </main>
}

export default Layout
