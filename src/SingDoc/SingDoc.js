import Catalogue from 'src/Catalogue';
import SingBook from 'src/SingBook';
import React, {Component} from 'react';
import {Layout} from 'antd';
import 'antd/dist/antd.css';
import './sing-doc.scss';
const {Header, Footer, Sider, Content} = Layout;

export default class SingDoc extends Component {
   constructor() {
      super(...arguments);
   }

   render() {
      return (
         <Layout style={{height: "100%"}} className='sing-doc'>
            <Sider breakpoint="md" collapsedWidth="0" className='sider' width={'300'}>
               <Catalogue />
            </Sider>

            <Content>
               <SingBook />
            </Content>
         </Layout>
      );
   }
}