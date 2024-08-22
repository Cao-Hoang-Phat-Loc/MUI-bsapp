// Chips.js
import * as React from "react";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";

export default function BasicChips({ ptp }) {
  return (
    <Grid container spacing={1}>
      {ptp.skills.slice(0, 4).map((skill, index) => (
        <Grid item key={index} xs="auto">
          <Chip label={skill} color="primary" />
        </Grid>
      ))}
    </Grid>
  );
}
