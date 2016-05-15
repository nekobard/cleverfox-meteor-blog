import React from 'react';
import Article from './Article.jsx';

export default class Articles extends React.Component{

  getArticles(){
    return [
      { _id: 'dwqwdqw', title: 'First', description: 'Super article'},
      { _id: 'vbfbb', title: 'Second', description: 'Another super article'}
    ];
  }

  renderArticles() {
    return this.getArticles().map(article =>
        <Article key={article._id} title={article.title} description={article.description}/>
    );
  }

  render(){
    return (
      <div className='container-articles'>
        <ul className='articles'>
          {this.renderArticles()}
        </ul>
      </div>
    )
  }
}
