import { HashRouter as Router } from 'react-router-dom'
import { Header } from './components'
import routes from './routes'
import './global.css'

const Routes: React.ComponentType<any> = routes
const Layout = () => {
  return <main id="main">
    <Header />
    <Router>
        <Routes />
    </Router>
  </main>
}

export default Layout
