import { HashRouter } from 'react-router-dom'
import { Header } from './components'
import { observer } from 'mobx-react-lite'
import { useSelector } from '@hooks'
import routes from './routes'
import './global.css'

const Routes: React.ComponentType<any> = routes
const Router: React.ComponentType = HashRouter
const Layout = observer(() => {
  const { theme } = useSelector(state => state.CommonModel)
  return <main id="main" data-theme={theme}>
      <Header />
      <Router>
          <Routes />
      </Router>
    </main>
})

export default Layout
