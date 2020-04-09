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
import Apiclass from './Apiclass';
import Apihooks from './Apihooks';
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
          <Menu.Item ><Link to="/apiclass">API Class Base</Link> </Menu.Item>
          <Menu.Item ><Link to="/apihooks">API Hooks Base</Link> </Menu.Item>
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

      <Route  path="/apiclass"> 
      <Apiclass />
      </Route>

      <Route  path="/apihooks"> 
      <Apihooks />
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
