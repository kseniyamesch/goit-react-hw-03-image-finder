import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root')
export default class Modal extends Component {

    componentDidMount() {
window.addEventListener('keydown', evt => {
    if(evt.code === 'Escape') {
        console.log('esc');
        this.props.onClose()
    }
})
    }

  render() {
    const {children} = this.props
    return createPortal(
      <div className={s.Overlay}>
        <div className={s.Modal}>
            {children}
        </div>
      </div>, modalRoot
    );
  }
}
