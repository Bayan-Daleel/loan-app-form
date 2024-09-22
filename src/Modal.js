import React from "react";
import "./LoanformSyles.css";
export const Modal = ({ isvisible, errorMessage = null }) => {
  if (isvisible) {
    return (
      <div id="modal">
        <div id="modal-content">
          <h3 style={errorMessage ? { color: "red" } : { color: "green" }}>
            {errorMessage != null
              ? errorMessage
              : "This Modal Has Been Submitted Successfully"}
          </h3>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
