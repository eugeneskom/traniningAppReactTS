import React, { useEffect, useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getTrainings } from "../libs/helpers";
import { AppContext } from "../App";

function History() {
  const { trainings, setTrainings } = useContext(AppContext);

  function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    return { name, calories, fat, carbs, protein };
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Training</TableCell>
            <TableCell align="right">Repetitions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trainings?.map((training) => (
            <TableRow key={Math.random()} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {training.exercise}
              </TableCell>
              <TableCell align="right">{training.times}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default History;
