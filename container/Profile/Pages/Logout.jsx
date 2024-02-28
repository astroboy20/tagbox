import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { EditContainer } from "../Profile.style";

const Logout = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
     <EditContainer>
     <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>
      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdropClassName="backdrop"
       
      >
        <Modal.Body>
          <div>
            <Button onClick={() => setModalShow(false)}>Close</Button>
            <Button>Logout</Button>
          </div>
        </Modal.Body>
      </Modal>
     </EditContainer>
    
    </>
  );
};

export default Logout;
