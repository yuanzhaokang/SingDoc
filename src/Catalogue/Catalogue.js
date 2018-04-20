import {
   UPDATE_BOOK
} from 'src/actions/actions';
import {List, ListItem} from 'material-ui/List';
import Folder from 'material-ui/svg-icons/file/folder';
import Book from 'material-ui/svg-icons/action/book';
import Paper from 'material-ui/Paper';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import './catalogue.scss';

class Catalogue extends Component {
   constructor() {
      super(...arguments);
      this.state = {
         catalogue: []
      };
   }

   componentDidMount() {
      this.fetchCatalogue();
   }

   render() {
      return (
         <Paper className='catalogue'>
            <List>
               {this.state.catalogue}
            </List>
         </Paper>
      );
   }

   fetchCatalogue() {
      fetch('./config/config.json')
         .then(res => {
            res.json()
               .then(data => {
                  let catalogue = this.renderCatalogue(data, "Sing Doc");
                  this.setState({
                     catalogue
                  })
               });
         });
   }

   renderCatalogue(data, value) {
      let nest = [];

      for(let i = 0; i < data.length; i++) {
         if(this.isFolder(data[i])) {
            nest.push(this.renderCatalogue(data[i].children, data[i].name));
            continue;
         }

         let item = <ListItem
            leftIcon={<Book />}
            key={data[i].name}
            title={data[i].name}
            secondaryText={data[i].name}
            onClick={this.handleItemClick.bind(this, data[i].value)}
         >
         </ListItem>;
         nest.push(item);
      }

      return (
         <ListItem leftIcon={<Folder />} key={new Date().getTime() + "-" + value} title={value} secondaryText={value} nestedItems={nest}></ListItem>
      );
   }

   handleItemClick(path) {
      this.props.dispatch({
         path: path,
         type: UPDATE_BOOK
      });
   }

   isFolder(item) {
      return !!item.children;
   }
}

export default connect()(Catalogue);