import React, { Component } from 'react';
import { Overlay, ModalImg } from './Modal.styled';

export class Modal extends Component {
  render() {
    return (
      <Overlay>
        <ModalImg>
          <img width="500px" height="500px" src="" alt="" />
        </ModalImg>
      </Overlay>
    );
  }
}
