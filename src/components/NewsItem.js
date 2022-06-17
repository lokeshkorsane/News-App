import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NewsItem extends Component {
   
  static propTypes = {}
 
  render() {
    let {title,description,imageURL,newsURL}=this.props;
    return (
        <div className="card" style={{width: '24rem'}}>
        <img src={imageURL} className="card-img-top" alt="..."/>
        <div className="card-body flex-column-reverse d-flex">
        <div className="d-grid gap-2">
          <a href={newsURL}  target="_blank"className="btn btn-primary bolck">Explore</a>
          </div>
          <p className="card-text">{description}</p>
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    )
  }
}

export default NewsItem