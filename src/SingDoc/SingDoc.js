import Catalogue from 'src/Catalogue';
import SingBook from 'src/SingBook';
import reducers from 'src/reducers/reducers';
import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Layout} from 'antd';
import 'antd/dist/antd.css';
import './sing-doc.scss';
const {Header, Footer, Sider, Content} = Layout;
const store = createStore(reducers);

export default class SingDoc extends Component {
   constructor() {
      super(...arguments);
   }

   render() {
      return (
         <Provider store={store}>
            <Layout style={{height: "100%"}} className='sing-doc'>
               <Sider breakpoint="md" collapsedWidth="0" className='sider'>
                  <Catalogue />
               </Sider>

               <Layout>
                  <Content>
                     <SingBook />
                  </Content>
               </Layout>
            </Layout>
         </Provider>
      );
   }
}