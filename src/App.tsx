import { createContext } from 'react'
import { Route, HashRouter as Router, Switch, } from 'react-router-dom'
import { Home } from './pages'
import store, { RootStoreType }  from './store'
import './global.css'

export const storeContext = createContext<RootStoreType | null>(null)

const App = () => {
  return <storeContext.Provider value={store}>
    <Router>
      <Switch>
        <Route path={'/'} component={Home}></Route>
      </Switch>
    </Router>
  </storeContext.Provider>
}

export default App
