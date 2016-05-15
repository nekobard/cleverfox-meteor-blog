import React from 'react';

export default class Article extends React.Component{
  render(){
    return (
      <li>
        <h4>{this.props.title}</h4>
        <span>Posted 15.05.2016</span>
        <p>{this.props.description}</p>
        <button>READ MORE</button>
      </li>
    )
  }
}
