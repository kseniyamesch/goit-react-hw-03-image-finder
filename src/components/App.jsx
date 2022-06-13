import { Component } from 'react';
import Searchbar from './Searchbar';
import s from './App.module.css'
// import axios from 'axios';
import getRequest from 'services/API';

import ImageGallery from './ImageGallery';

export class App extends Component {
  state = {
    searchQuery: '',
    data: null,
    page: 1,
  };
  onSearchSubmit = data => {
    this.setState({ searchQuery: data });
  };

componentDidUpdate (_, prevState) {
  if (this.state.searchQuery !== prevState.searchQuery)
  {
getRequest(this.state.searchQuery)
.then(response => {
  console.log(response);
  this.setState({data: response.data.hits});
})
}
console.log(this.state)
};


  render() {
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.onSearchSubmit}></Searchbar>
        {this.state.data && <ImageGallery data={this.state.data}>
  
  </ImageGallery>}
      </div>

    );
  }
}
