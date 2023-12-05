import { Component } from "react";
// import (createPortal) from 'react-dom'


import { ModalBackdrop, ModalContent } from "./Modal.styled";

// const modalRoot = document.querySelector('#modal-root')

export class Modal  extends Component {
    componentDidMount() {
        console.log('Modal componentDidMount');
        window.addEventListener('keydown', this.handleKeyDown);
      } 
    
      componentWillUnmount() {
        console.log('Modal componentWillUnmount');
        window.removeEventListener('keydown', this.handleKeyDown);
      }


      handleKeyDown = e => {
        if (e.code === 'Escape') {
          console.log('If you want close this Modal Window, push `Escape`');
    
          this.props.onClose();
        }
      };

      handleBackdropClick = evt => {
    
        if (evt.currentTarget === evt.target) {
          this.props.onClose();
        }
      };

      render () {
//   return createPortal(<ModalBackdrop>
//     <ModalContent>{this.props.children}</ModalContent>
// </ModalBackdrop>, modalRoot)
return (
        <ModalBackdrop onClick={this.handleBackdropClick}>
            <ModalContent>{this.props.children}</ModalContent>
        </ModalBackdrop>)
        
    }
}

// return createPortal(<ModalBackdrop>
//     <ModalContent>{this.props.children}</ModalContent>
// </ModalBackdrop>, modalRoot)

// }