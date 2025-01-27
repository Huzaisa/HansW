import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function Gallerypage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {/* Tombol ADD GALLERY */}
      <Button variant="success" className="float-end px-4 mb-3 mt-3 mx-5" onClick={handleShow}>
        + ADD GALLERY
      </Button>

      {/* Input Group */}
      <div className="input-group px-5 justify-content-end" 
      style={{background: "none", width: "85%", marginLeft: "190px"}}>
        {/* Card */}
        <div className="card" style={{ width: '18rem' }}>
          <img className="card-img-top" src="https://via.placeholder.com/150" alt="Gallery image" />
          <div className="card-body">
            <p className="card-text">
              Lorem, ipsum dolor.
            </p>
          </div>
        </div>

        {/* Tombol EDIT dan DELETE */}
        <div className="input-group-append d-flex flex-column gap-2" style={{ backgroundColor: 'white' }}>
          <Button variant="warning" onClick={handleShow}>
            EDIT
          </Button>
          <Button variant="danger">DELETE</Button>
        </div>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Gallery</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="formUploadGallery">
          <label for="exampleFormControlFile1">Upload Gallery</label>
          <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNamaAcara">
              <Form.Label>Nama Acara</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDate">
              <Form.Label>Tanggal</Form.Label>
              <Form.Control type="date" placeholder="Pilih tanggal" />
            </Form.Group>

            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default Gallerypage
