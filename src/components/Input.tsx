import React, { useState, useContext } from "react";
import { AppContext } from "../App";
function Input({  }: any) {
  const {inputNumber, setInputNumber,isInputError, setIsInputError} = useContext(AppContext);


  function handleInput(e: React.ChangeEvent<HTMLInputElement>): void {
    setInputNumber(+e.target.value);
    if(e.currentTarget.value !== ''){
      setIsInputError(false)
    }
  }

  return (
      <input onChange={handleInput} type="number" name="number" value={inputNumber} className={`${isInputError ? "error input" : ""}`} />
  );
}

export default Input;
