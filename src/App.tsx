import { createContext } from 'react'
import { Route, HashRouter as Router, Switch, } from 'react-router-dom'
import { Home } from './pages'
import store from './store'
import './global.css'

export const storeContext = createContext(store)

const App = () => {
  return <storeContext.Provider value={store}>
    <Router>
      <Switch>
        <Route path={'/'} component={Home}></Route>
      </Switch>
    </Router>
  </storeContext.Provider>
}

export default App;
