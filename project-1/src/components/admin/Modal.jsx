import React from "react";
import { createPortal } from "react-dom";

function Modal({ show, closeModal, children, uBook, setRefreshBook }) {
  if (show)
    return createPortal(
      <>
        <div
          onClick={() => {
            closeModal(false);
            setRefreshBook(null);
          }}
          className="backdrop"
        ></div>
        <div
          className="modal"
          tabIndex="-1"
          style={{ display: "block", height: "70vh" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {uBook ? "Update Book" : "Add Book"}
                </h5>
                <button
                  type="button"
                  onClick={() => {
                    closeModal(false);
                    setRefreshBook(null);
                  }}
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">{children}</div>
            </div>
          </div>
        </div>
      </>,
      document.getElementById("modal-root")
    );
}

export default Modal;
