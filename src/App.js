import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
export default class App extends Component {
  apiKey=process.env.REACT_APP_API
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/"  element={<News key="general" apikey={this.apiKey} category="general"/>}/>
        <Route exact path="/business"   element={<News key="business" apikey={this.apiKey} category="business"/>}/>
        <Route exact path="/entertainment" element={<News key="entertainment" apikey={this.apiKey} category="entertainment"/>}/>
        <Route exact path="/health"  element={<News key="health" apikey={this.apiKey} category="health"/>}/>
        <Route exact path="/science" element={<News key="science" apikey={this.apiKey} category="science"/>}/>
        <Route exact path="/sports" element={<News key="sports" apikey={this.apiKey} category="sports"/>}/>
        <Route exact path="/technology" element={<News key="technology" apikey={this.apiKey} category="technology"/>}/>
          </Routes>
        </Router>
      </div>
    );
  }
}
