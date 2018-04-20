import SingDoc from '../SingDoc';
import reducers from 'src/reducers/reducers';

// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import 'normalize.css';

const store = createStore(reducers);

export default class App extends Component {
   constructor() {
      super(...arguments);
   }

   render() {
      return (
         <Provider store={store}>
            <MuiThemeProvider>
               <SingDoc />
            </MuiThemeProvider>
         </Provider>
      );
   }
}