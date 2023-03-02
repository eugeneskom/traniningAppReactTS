import React, { useState, useContext } from "react";
import { AppContext } from "../App";
import { TextField } from "@mui/material";

function Input({}: any) {
  const { inputNumber, setInputNumber, isInputError, setIsInputError } = useContext(AppContext);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>): void {
    setInputNumber(+e.target.value);
    if (e.currentTarget.value !== "") {
      setIsInputError(false);
    }
  }

  return (
    <TextField
      onChange={handleInput}
      value={inputNumber}
      className={`${isInputError ? "error input" : ""}`}
      id="outlined-number"
      label="Number"
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}

export default Input;
