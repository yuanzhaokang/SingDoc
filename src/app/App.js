import SingDoc from '../SingDoc';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, {Component} from 'react';
import 'normalize.css';

export default class App extends Component {
   constructor() {
      super(...arguments);
   }

   render() {
      return (
         <MuiThemeProvider >
            <SingDoc />
         </MuiThemeProvider>
      )
   }
}