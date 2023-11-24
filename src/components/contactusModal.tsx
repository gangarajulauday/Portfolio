import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ContactUsModal({closeCallback, show}:{closeCallback:()=> void, show:boolean}) {
  
  

  return (
    <>
      
      <Modal
        size="xl"
        show={show}
        onHide={() => closeCallback()}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
      
    </>
  );
}

export default ContactUsModal;