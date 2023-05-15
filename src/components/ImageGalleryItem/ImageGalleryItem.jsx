import React, { Component } from 'react';
import { Item, Img } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state= {
    showModal: false,
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };




  render() {
    const { src, alt, largeImageURL} = this.props;
    // const { showModal } = this.state;
    return (
      <Item >
        <Img  onClick={this.toggleModal}          
          src={src}
          alt={alt}         
        />
        {this.state.showModal && (<Modal largeImageURL={largeImageURL} onClose={this.toggleModal}/> )}
      </Item>
    );
  }
}
    
    
    
    
  

