import React, { SyntheticEvent } from "react";
import { useState,useContext } from "react";
import Input from "./Input";
import SelectExc from "./SelectExc";
import {saveTraining, getTrainings } from "../libs/helpers";
import { AppContext } from "../App";
import Button from '@mui/material/Button';
import { SelectChangeEvent } from "@mui/material";

function Form() {
  const {inputNumber, setInputNumber,isInputError, setIsInputError} = useContext(AppContext);

  const [selected, setSelected] = useState<string>("push ups");

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if(inputNumber === 0){
      setIsInputError(true);
      return
    }
    saveTraining({exercise:selected, times: +inputNumber})
    setSelected(selected);


    setInputNumber(0);
  }

  function handleSelect(e: SelectChangeEvent): void {
    setSelected(e.target.value);
    console.log(e.target.value);
  }


  return (
    <form onSubmit={handleSubmit}>
      <Input />
      <SelectExc handleSelect={handleSelect} selected={selected} />
      <Button variant="outlined" disabled={isInputError} type="submit">Submit</Button>
    </form>
  );
}

export default Form;
