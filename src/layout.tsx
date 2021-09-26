import { HashRouter } from 'react-router-dom'
import { Header, Dialog } from './components'
import { observer } from 'mobx-react-lite'
import { useSelector } from '@hooks'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import routes from './routes'
import './global.css'

const Routes: React.ComponentType<any> = routes
const Router: React.ComponentType = HashRouter
const Layout = observer(() => {
  const { theme } = useSelector(state => state.CommonModel)
  return <DndProvider backend={HTML5Backend}> 
    <main id="main" data-theme={theme}>
      <Header />
        <Router>
          <Routes />
        </Router>
        <Dialog />
    </main>
  </DndProvider>
})

export default Layout
