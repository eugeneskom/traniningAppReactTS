import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

type ExerciseProps = {
  type: "skipping" | "push ups" | "jumping jacks" | "lunges" | "plank" | "squats";
  sets: number;
  reps: number;
  id: number;
};

function Exercise({ type, sets, reps, id }: ExerciseProps) {
  const [checked, setChecked] = useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const labelId = `checkbox-list-label-${id}`;

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem key={id} disablePadding>
        <ListItemButton role={undefined} onClick={handleToggle(id)} dense>
          <ListItemIcon>
            <Checkbox edge="start" checked={checked.indexOf(id) !== -1} tabIndex={-1} disableRipple inputProps={{ "aria-labelledby": labelId }} />
          </ListItemIcon>
          <ListItemText id={labelId} primary={type} />
          <ListItemText id={labelId} primary={sets} />
          <ListItemText id={labelId} primary={reps} />
        </ListItemButton>
      </ListItem>
    </List>
  );
}

export default Exercise;
