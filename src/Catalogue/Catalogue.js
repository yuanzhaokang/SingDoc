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
                  let catalogue = this.renderCatalogue(data);
                  this.setState({
                     catalogue
                  })
               });
         });
   }

   renderCatalogue(data) {
      let nest = [];

      for(let i = 0; i < data.length; i++) {
         let item = <ListItem key={data[i].name} primaryText={data[i].name}></ListItem>;
         nest.push(item);

         if(this.isFolder(data[i])) {
            console.log(data[i])
            this.renderCatalogue(data[i].children);
         }
      }

      return (
         <ListItem nestedItems={nest}></ListItem>
      );
   }

   isFolder(item) {
      return !!item.children;
   }
}