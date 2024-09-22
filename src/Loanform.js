import React from "react";
import "./LoanformSyles.css";
import { Modal } from "./Modal";
import { useState } from "react";

export const Loanform = () => {
  const [loanInput, setLoanInput] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  function handleFormSubmit(event) {
    event.preventDefault();
    setErrorMessage(null);
    const { age, phoneNumber, name } = loanInput;
    if (age < 18 || age > 100) {
      setErrorMessage("The age is not allowed");
    } else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErrorMessage("phone number format is not correct");
    }
    setShowModal(true);
  }
  const buttonDiabled =
    loanInput.name === "" ||
    loanInput.age === "" ||
    loanInput.phoneNumber === "";
  return (
    <div
      onClick={() => {
        if (showModal) {
          setShowModal(false);
        }
      }}
      className="flex"
      style={{ flexDirection: "column" }}
    >
      <form id="loan-form" className="flex" style={{ flexDirection: "column" }}>
        <h1>Requesting a Loan</h1>
        <hr></hr>
        <label>Name</label>
        <input
          value={loanInput.name}
          onChange={(event) => {
            setLoanInput({ ...loanInput, name: event.target.value });
          }}
        />
        <label>Phone Number</label>
        <input
          type="number"
          value={loanInput.phoneNumber}
          onChange={(event) => {
            setLoanInput({ ...loanInput, phoneNumber: event.target.value });
          }}
        />
        <label>Age</label>
        <input
          type="number"
          value={loanInput.age}
          onChange={(event) => {
            setLoanInput({ ...loanInput, age: event.target.value });
          }}
        />
        <label>Are you Employee?</label>
        <input
          type="checkbox"
          checked={loanInput.isEmployee}
          onChange={(event) => {
            setLoanInput({ ...loanInput, isEmployee: event.target.checked });
          }}
        />
        <label>Salary?</label>
        <select
          value={loanInput.salaryRange}
          onChange={(event) => {
            setLoanInput({ ...loanInput, salaryRange: event.target.value });
          }}
        >
          <option>less than 500$</option>
          <option>between 500$ and 2000$</option>
          <option>more than 2000$</option>
        </select>
        <button
          className={buttonDiabled ? "disable" : ""}
          disabled={buttonDiabled}
          onClick={handleFormSubmit}
          id="submit"
        >
          submit
        </button>
      </form>
      <Modal isvisible={showModal} errorMessage={errorMessage} />
    </div>
  );
};
