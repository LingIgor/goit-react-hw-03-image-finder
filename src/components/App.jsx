import axios from 'axios';
import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {

  state={
    images: [],
    query: null,
    page: 1,
    per_page: 12,
    error: '',
   

  }

   componentDidUpdate(prevProps, prevState) {
    if(prevState.query !== this.state.query) {
      const BASE_URL = 'https://pixabay.com/api/'
      const API_KEY ='34770322-1d785185ad6fb3686a5689e8d'
      const ALL_URL = `${BASE_URL}?q=${this.state.query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
      
        fetch(ALL_URL).then(res => res.json()).then(data => this.setState(prevState => ({
          images: [...prevState.images, ...data.hits]
        })))     
    }
  }



  onSubmit =(value) => {
    this.setState({
      query: value,
      page:1,
      images:[],
    })
    console.log(this.state.query)
    }


  render() {
    return (
      
    <>
<Searchbar  onSubmit={this.onSubmit}/>
<ImageGallery images={this.state.images}/>
<Button/>
<Loader/>

</>
     
    );
  }
}
