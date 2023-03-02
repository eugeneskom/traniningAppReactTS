import React, { useState } from "react";
import { Select } from "@mui/material";
import { SelectChangeEvent, MenuItem } from "@mui/material";

interface Props {
  handleSelect: (e: SelectChangeEvent) => void;
  selected: string
}

function SelectExc({ handleSelect, selected }:Props) {
  const [exercises, setExercises] = useState<{ name: string }[]>([
    { name: "choose exercise" }, 
    { name: "push ups" }, 
    { name: "squats" }, 
    { name: "shoulders push up" }
  ]);

  // setExcercises()

  return (
    <Select name="exercise" id="" value={selected} onChange={handleSelect}>
      {exercises.map((exc) => (
        <MenuItem key={exc.name} value={exc.name}>{exc.name}</MenuItem>
      ))}
    </Select>
  );
}

export default SelectExc;
