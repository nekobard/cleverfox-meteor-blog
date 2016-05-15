import React from 'react';
import Article from './Article.jsx';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

Articles = new Mongo.Collection('articles');

export default class ArticlesWrapper extends TrackerReact(React.Component){

  getArticles(){
    return Articles.find().fetch().reverse();
  }

  renderArticles() {
    return this.getArticles().map(article =>
        <Article key={article._id} title={article.title} description={article.description} createdAt={article.createdAt.toString()}/>
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
