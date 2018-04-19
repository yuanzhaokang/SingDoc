import React, {Component} from 'react';
import MarkdownIt from 'markdown-it';
import './singbook.scss';

export default class SingBook extends Component {
   constructor() {
      super(...arguments);

      this.state = {
         content: ''
      };
   }

   componentDidMount() {
      fetch("./md/README.md")
         .then(res => {
            res.text()
               .then(md => {
                  let markdown = new MarkdownIt();
                  let content = markdown.render(md);
                  this.setState({
                     content
                  });
               });
         });
   }

   render() {
      return (
         <div className='sing-book' dangerouslySetInnerHTML={{__html: this.state.content}} />
      );
   }
}