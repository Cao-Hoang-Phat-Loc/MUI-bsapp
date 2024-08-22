import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

const style = {
  py: 0,
  width: "100%",
  maxWidth: 360,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.paper",
};

export default function DividerVariants() {
  return (
    <List sx={style}>
      <Divider variant="middle" component="li" />
    </List>
  );
}
