import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'
import SignIn from './auth/SignIn'
import Signup from './user/Signup'
import Profile from './user/Profile'
import EditProfile from './user/EditProfile'
import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu'

class MainRouter extends Component {
  render() {
    return (
    <div>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
        <Route path="/user/:userId" component={Profile}/>
        <Route path="/users" component={Users}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={Signup}/>
      </Switch>
    </div>)
  }
}

export default MainRouter