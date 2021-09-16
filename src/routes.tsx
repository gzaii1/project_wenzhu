import { ComponentType } from 'react'
import { Route, Switch, RouteComponentProps } from 'react-router-dom'
import { Home, Article } from './pages'
import './global.css'

const Routes: ComponentType<RouteComponentProps<any>> = () =>
    <Switch>
        <Route path={'/article'} component={Article}></Route>
        <Route path={'/'} component={Home}></Route>
    </Switch>

export default Routes