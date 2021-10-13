import React from "react";
import { Typography, TextField } from "@mui/material";

export const ResultsView = (props) => {
  const { result } = props;

  return (
    <React.Fragment>
      <Typography variant="h6">Result</Typography>
      <TextField
        multiline
        rows={20}
        fullWidth
        inputProps={{ style: { fontFamily: "monospace" } }}
        value={result}
      />
    </React.Fragment>
  );
};

export default ResultsView;
