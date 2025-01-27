import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function Homepage() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {/* Tombol EDIT dan DELETE */}
      <div
        className="input-group-append position-absolute top-0 end-0 my-5 gap-2"
        style={{ backgroundColor: 'white' }}
      >
        <Button variant="warning" onClick={handleShow}>
          EDIT
        </Button>
        <Button variant="danger">DELETE</Button>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formLinkAlamat">
              <Form.Label>Link Alamat</Form.Label>
              <Form.Control type="text" placeholder="Enter link" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter description" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDiscount">
              <Form.Label>Diskon</Form.Label>
              <Form.Control type="text" placeholder="Enter discount" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBestSeller">
              <Form.Label>Best Seller</Form.Label>
              <Form.Control type="text" placeholder="Enter best seller" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cance
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Form */}
      <div
        className="position-absolute top-0 start-50 translate-middle-x"
        style={{ width: '35%' }}
      >
        <div className="mb-2">
          <label htmlFor="formGroupExampleInput" className="form-label" style={{ fontSize: '20px' }}>
            Link Alamat
          </label>
          <input
            type="text"
            className="form-control"
            style={{ fontSize: '10px' }}
            id="formGroupExampleInput"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="formGroupExampleInput2" className="form-label" style={{ fontSize: '20px' }}>
            Deskripsi
          </label>
          <input
            type="text"
            className="form-control"
            style={{ fontSize: '10px' }}
            id="formGroupExampleInput2"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="formGroupExampleInput3" className="form-label" style={{ fontSize: '20px' }}>
            Diskon
          </label>
          <input
            type="text"
            className="form-control"
            style={{ fontSize: '10px' }}
            id="formGroupExampleInput3"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="formGroupExampleInput4" className="form-label" style={{ fontSize: '20px' }}>
            Best Seller
          </label>
          <input
            type="text"
            className="form-control"
            style={{ fontSize: '10px' }}
            id="formGroupExampleInput4"
          />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
