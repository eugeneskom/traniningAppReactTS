import React, { SyntheticEvent } from "react";
import { useState, useContext } from "react";
import Input from "./Input";
import SelectExc from "./SelectExc";
import { saveTraining, getTrainings } from "../libs/helpers";
import { AppContext } from "../App";
import Button from "@mui/material/Button";
import { SelectChangeEvent } from "@mui/material";
import { Repetition } from "../types/types";

function Form() {
  const { trainings, setTrainings, inputNumber, setInputNumber, isInputError, setIsInputError } = useContext(AppContext);

  const [selected, setSelected] = useState<string>("push ups");

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (inputNumber === "") {
      setIsInputError(true);
      return;
    }
    console.log(selected, inputNumber);
    const training: Repetition = { exercise: selected, times: inputNumber };
    saveTraining(training);
    setTrainings((prevTrainings) => {
      return prevTrainings ? [...prevTrainings, training] : [training];
    });
    setSelected(selected);
    setInputNumber("");
  }

  function handleSelect(e: SelectChangeEvent): void {
    setSelected(e.target.value);
    console.log(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <Input  />
      <SelectExc handleSelect={handleSelect} selected={selected} />
      <Button size="large" variant="outlined" disabled={isInputError} type="submit">
        Submit
      </Button>
    </form>
  );
}

export default Form;
