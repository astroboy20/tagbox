import { useState } from "react";
import { EditContainer } from "../Profile.style";
import { Modal } from "@/components/Modal";
import {
  Actions,
  Buttons,
} from "@/container/Host/SingleEvent/SingleEvent.style";
import { Button } from "@/components/Button/Button";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { reset } from "@/features/authSlice";
import {toast} from "react-toastify"

const Logout = () => {
  const [modalShow, setModalShow] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(reset());
    toast.success("You have been successfully logged out");
    router.push("/login");
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          margin:"20% auto"  
        }}
      >
        <Button variant="dark-button" onClick={() => setModalShow(true)}>
          Logout
        </Button>

        <Modal show={modalShow} onClose={() => setModalShow(false)}>
          <>
            <Actions className="actions">
              <span>Are you sure you want to logout ?</span>
              <Buttons className="buttons">
                <button
                  className={"white-btn"}
                  onClick={() => setModalShow(false)}
                >
                  Cancel
                </button>
                <button className={"dark-button"} onClick={handleLogout}>
                  {" "}
                  Logout
                </button>
              </Buttons>
            </Actions>
          </>
        </Modal>

        <Button variant="primary" onClick={() => setModalShow(true)}>
          Submit Response
        </Button>
      </div>
    </>
  );
};

export default Logout;
