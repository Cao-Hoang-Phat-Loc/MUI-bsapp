import React, { useState } from "react";
import SearchAppBar from "./components/SearchAppBar";
import BoxSystemProps from "./components/Box";
import prettyPrint from "./prettyPrint.json";
import { Grid, Pagination, Box } from "@mui/material";

const ITEMS_PER_PAGE = 4;

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = prettyPrint.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(prettyPrint.length / ITEMS_PER_PAGE);

  return (
    <div>
      <SearchAppBar />
      <Grid
        width={"50%"}
        container
        spacing={2}
        mt={1}
        justifyContent="center"
        margin={"0 auto"}
        flexWrap="wrap"
      >
        {currentItems.map((ptp) => (
          <Grid item key={ptp.id}>
            <BoxSystemProps ptp={ptp} />
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" mt={2}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handleChangePage}
          color="primary"
        />
      </Box>
    </div>
  );
}

export default App;
