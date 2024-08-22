import * as React from "react";
import Box from "@mui/material/Box";
import ClickableLinkChips from "./Chip";
import { Button } from "@mui/material";
import DividerVariants from "./Divider";
export default function BoxSystemProps({ ptp }) {
  return (
    <Box
      height={350}
      my={4}
      display="flex"
      flexDirection="column"
      p={2}
      sx={{ border: "2px solid grey", position: "relative" }} // Set position to relative
    >
      <Box
        flex={1} // Allow this Box to grow and take available space
        display="flex"
        flexDirection="column"
        gap={2}
      >
        <div>{ptp.title}</div>
        <DividerVariants />
        <ClickableLinkChips key={ptp.id} ptp={ptp} />
        <div>{ptp.description}</div>
      </Box>
      <Button
        variant="contained"
        color="success"
        sx={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
        }} // Position button at the bottom
      >
        Lean more
      </Button>
    </Box>
  );
}
