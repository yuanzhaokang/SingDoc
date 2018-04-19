import {List, ListItem} from 'material-ui/List';
// import FontIcon from 'material-ui/FontIcon';
import Folder from 'material-ui/svg-icons/file/folder';
import Book from 'material-ui/svg-icons/action/book';
import React, {Component} from 'react';
import './catalogue.scss';

export default class Catalogue extends Component {
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
         <div className='catalogue'>
            <List>
               {this.state.catalogue}
            </List>
         </div>
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
            secondaryText={data[i].name}>
         </ListItem>;
         nest.push(item);
      }

      return (
         <ListItem leftIcon={<Folder />} key={new Date().getTime() + "-" + value} title={value} secondaryText={value} nestedItems={nest}></ListItem>
      );
   }

   isFolder(item) {
      return !!item.children;
   }
}