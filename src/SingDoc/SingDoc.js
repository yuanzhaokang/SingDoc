import Catalogue from 'src/Catalogue';
import SingBook from 'src/SingBook';
import React, {Component} from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css'
const { Header, Footer, Sider, Content } = Layout;

export default class SingDoc extends Component {
   constructor() {
      super(...arguments);
   }

   render() {
      return (
            <Layout style={{height: "100%"}}>
               <Sider breakpoint="lg" collapsedWidth="0">
                  <Catalogue/>
               </Sider>

               <Layout>
                  <Content>
                     <SingBook/>
                  </Content>
               </Layout>
            </Layout>
      );
   }
}