import React, {Component} from 'react';
import MarkdownIt from 'markdown-it';
import {connect} from 'react-redux';
import './singbook.scss';

class SingBook extends Component {
   constructor() {
      super(...arguments);

      this.state = {
         content: ''
      };
   }

   componentDidMount() {
      this.getBookContent();
   }

   componentDidUpdate() {
      this.getBookContent();
   }

   render() {
      return (
         <div className='sing-book' dangerouslySetInnerHTML={{__html: this.state.content}} />
      );
   }

   getBookContent() {
      fetch(this.props.path)
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
}

const mapStateToProps = (state, ownProps) => {
   return {
      path: state.path
   };
}

export default connect(mapStateToProps)(SingBook);