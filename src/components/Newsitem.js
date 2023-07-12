import React, { Component } from 'react';
import './components.css'
export class Newsitem extends Component {
  render() {
    let {title,description,imurl,nurl,author,publishedAt,source}=this.props;
    return (
        <div className="card my-2">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
    {source}
  </span>
  <img src={!imurl?"https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_640.jpg":imurl} height="250px" className="card-img-top text-centre" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={nurl} target='_blank' rel="noreferrer" className="btn btn-dark btn-sm">Read More</a>
  </div>
  <div className="card-footer">
        <small className="text-body-secondary">By {author?author:"Unknown"} on {publishedAt}</small>
      </div>
  </div>
    );
  }
}

export default Newsitem;
