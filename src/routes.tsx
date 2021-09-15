import { ComponentType } from 'react'
import { Route, Switch, RouteComponentProps } from 'react-router-dom'
import { Home } from './pages'
import './global.css'

const Routes: ComponentType<RouteComponentProps<any>> = () =>
    <Switch>
        <Route path={'/'} component={Home}></Route>
    </Switch>

export default Routes