import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

function Menupage() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div>
      {/* Tombol ADD MENU */}
      <Button variant="success" className="float-end px-4 mb-3 mt-3 mx-5" onClick={handleShow}>
        + ADD MENU
      </Button>

      {/* Input Group */}
      <div
        className="input-group px-5 justify-content-end"
        style={{ background: 'none', width: '85%', marginLeft: '190px' }}
      >
        {/* Card */}
        <div className="card" style={{ width: '18rem' }}>
          <img className="card-img-top" src="https://via.placeholder.com/150" alt="Menu image" />
          <div className="card-body">
            <p className="card-text">Lorem, ipsum dolor.</p>
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
          <Modal.Title>Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="formUploadImage">
          <label for="exampleFormControlFile1">Upload Gambar Menu</label>
          <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formJudulMenu">
              <Form.Label>Judul Menu</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control as="textarea" rows={3}/>
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Menupage;
