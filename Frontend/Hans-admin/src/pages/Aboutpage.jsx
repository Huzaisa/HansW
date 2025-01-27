import React, { useState } from "react"
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap"

const Aboutpage = () => {
  const [showModal, setShowModal] = useState(false)
  const [modalTitle, setModalTitle] = useState("")

  const handleClose = () => setShowModal(false)
  const handleShow = (title) => {
    setModalTitle(title)
    setShowModal(true)
  };

  return (
    <div>
      <Container className="w-100 min-vh-100">
        <Row
          className="position-absolute"
          style={{
            top: "40px",
            left: "450px",
            width: "55%",
            backgroundColor: "#F0EDE9",
          }}
        >
          <h1 style={{ background: "none", color: "black" }}>LATAR BELAKANG</h1>
          <p style={{ background: "none", color: "black" }}>Lorem, ipsum dolor.</p>
          <Button variant="danger" style={{ width: "150px" }}>
            DELETE
          </Button>
          <Button
            variant="warning"
            style={{ width: "150px" }}
            onClick={() => handleShow("LATAR BELAKANG")}
          >
            EDIT
          </Button>
        </Row>

        <Row
          className="position-absolute"
          style={{ marginLeft: "335px", marginTop: "370px" }}
        >
          <Col style={{ background: "none" }}>
            <div style={{ backgroundColor: "#F0EDE9" }}>
              <h1 style={{ background: "none", color: "black" }}>VISI</h1>
              <p style={{ background: "none", color: "black" }}>Lorem, ipsum dolor.</p>
              <Button variant="danger">DELETE</Button>
              <Button
                variant="warning"
                onClick={() => handleShow("VISI")}
              >
                EDIT
              </Button>
            </div>
          </Col>
          <Col
            style={{
              background: "none",
              backgroundColor: "#F0EDE9",
              color: "black",
            }}
          >
            <h1 style={{ background: "none" }}>MISI</h1>
            <p style={{ background: "none", color: "black" }}>Lorem, ipsum dolor.</p>
            <Button variant="danger">DELETE</Button>
            <Button
              variant="warning"
              onClick={() => handleShow("MISI")}
            >
              EDIT
            </Button>
          </Col>
        </Row>
      </Container>


      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control as="textarea" rows={3}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning">Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Aboutpage;
