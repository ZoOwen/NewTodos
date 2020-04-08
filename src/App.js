import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';

//pages
import Navbar from './pages/Navbar';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
    <Navbar />
  


    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  );
}

export default App;
