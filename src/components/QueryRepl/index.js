import React, { useEffect, useState } from "react";
import { Grid, Container, Typography, TextField } from "@mui/material";

import { initializeProskomma } from "proskommaUtils";

export const QueryRepl = () => {
  const [pk, setPk] = useState(null);

  useEffect(() => {
    const initPk = async () => {
      if (pk === null) {
        const pk = await initializeProskomma("nestle-1904");
        setPk(pk);
      }
    };
    initPk();
  }, []);

  return (
    <Container>
      <p>Is Proskomma loaded? {pk ? "Yes" : "No"}</p>
      <Grid container justify="center" spacing={2}>
        <Grid item lg={6} align="center">
          <Typography variant="h6">Query</Typography>
          <TextField
            multiline
            rows={20}
            fullWidth
            inputProps={{ style: { fontFamily: "monospace" } }}
          />
        </Grid>
        <Grid item lg={6} align="center">
          <Typography variant="h6">Result</Typography>
          <TextField
            multiline
            rows={20}
            fullWidth
            inputProps={{ style: { fontFamily: "monospace" } }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default QueryRepl;
