import React, {Component} from 'react';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux';
import './singbook.scss';
import 'highlight.js/styles/dark.css';

class SingBook extends Component {
   constructor() {
      super(...arguments);

      this.state = {
         content: ''
      };
   }

   componentDidMount() {
      this.getBookContent(this.props.path);
   }

   componentWillReceiveProps(nextProps, nextState) {
      this.getBookContent(nextProps.path);
   }

   render() {
      return (
         <Paper className='sing-book'>
            <div dangerouslySetInnerHTML={{__html: this.state.content}} />
         </Paper>
      );
   }

   getBookContent(path) {
      fetch(path)
         .then(res => {
            res.text()
               .then(md => {
                  let markdown = MarkdownIt({
                     highlight: function (str, lang) {
                        if(lang && hljs.getLanguage(lang)) {
                           try {
                              return '<pre class="hljs"><code>' +
                                 hljs.highlight(lang, str, true).value +
                                 '</code></pre>';
                           } catch(__) {}
                        }

                        return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
                     }
                  });

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