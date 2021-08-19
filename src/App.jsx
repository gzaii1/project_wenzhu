import React from 'react'
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'
import { Home } from './pages/index.js'

const App = () => {
    return <Router>
        <Switch>
            <Route path={'/home'} render={() => <Home />} />
            <Redirect from='/*' to='/home'/>
        </Switch>
    </Router>
}

export default App