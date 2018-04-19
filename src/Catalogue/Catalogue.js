import {List, ListItem} from 'material-ui/List';
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

         let item = <ListItem key={data[i].name} primaryText={data[i].name}></ListItem>;
         nest.push(item);
      }

      return (
         <ListItem key={new Date().getTime() + "-" + value} primaryText={value} nestedItems={nest}></ListItem>
      );
   }

   isFolder(item) {
      return !!item.children;
   }
}