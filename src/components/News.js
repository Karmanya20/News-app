import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import './components.css';
export class News extends Component {
  constructor(props){
    super(props);
    this.state={
      articles: [],
      loading: false,
      page:1
    }
  };
  static defaultProps={
    country: "in",
    category: "general"
  }
  static propTypes={
    country: PropTypes.string,
    category: PropTypes.string,
    apikey: PropTypes.string
  }

async  componentDidMount()
{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=9`;
    this.setState({loading: true})
    let data=await fetch(url);
    let parseData=await data.json()
    this.setState({articles: parseData.articles, totalResults: parseData.totalResults, loading: false})
  }
  handlePrev=async ()=>{
    console.log("prev")
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page-1}&pageSize=9`;
    this.setState({loading: true})
    let data=await fetch(url);
    let parseData=await data.json()
    this.setState({
      page:this.state.page-1,
      articles: parseData.articles,
      loading: false
    })
  }
  handleNext=async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=9`;
    this.setState({loading: true})
    let data=await fetch(url);
    let parseData=await data.json()
    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles,
      loading: false
    })
  }
  capitalizer(v){
    return v.charAt(0).toUpperCase()+v.slice(1);
  }
  render() {
    return (
      <div className="container my-3">
      <div className="jumbo p-5 mb-2">
  <h1>Top headlines</h1>
  <p>{this.capitalizer(this.props.category)}</p>
</div>
        {this.state.loading&&<Spinner/>}
      <div className='row'>
      {!this.state.loading && this.state.articles.map((element)=>{
       return <div className='col-md-4' key={element.url}>
        <Newsitem title={element.title?element.title.slice(0, 50):""} description={element.description?element.description.slice(0,  70):""} imurl={element.urlToImage} nurl={element.url} author={element.author}  publishedAt={element.publishedAt} source={element.source.name}/>
      </div>
      })}
      </div>
      <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1} type="button" className="btn btn-outline-dark mx-2" onClick={this.handlePrev} >&larr; Prev</button>
<button disabled={this.state.page+1>Math.ceil(this.state.totalResults/12)} type="button" className="btn btn-outline-dark" onClick={this.handleNext}>Next &rarr;</button>
      </div>
      </div>
    );
  }
}

export default News;
