import React from 'react'
import { Layout, Menu } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//page
import Todof from './Todof';
import Todoc from './Todoc';

function Navbar() {
  const { Header, Content, Footer } = Layout;
    return (
        <Router>
        <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          <Menu.Item ><Link to="/">Home</Link> </Menu.Item>
          <Menu.Item ><Link to="/todof">Hooks</Link> </Menu.Item>
          <Menu.Item ><Link to="/todoc">Class</Link> </Menu.Item>
        </Menu>
      </Header>



      <Switch>
      <Route exact path="/"> 
      <Home />
      </Route>

      <Route  path="/todof"> 
      <Todof />
      </Route>

      <Route  path="/todoc"> 
      <Todoc />
      </Route>
      </Switch>

        </Router>
      

    )
    
    function Home() {
      return (
        <Content>Home</Content>
      )
    }
    
}

export default Navbar
