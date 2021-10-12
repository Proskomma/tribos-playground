import React, { useEffect, useState } from "react";
import { Grid, Container, Typography, TextField, Button } from "@mui/material";
import gqlPrettier from "graphql-prettier";

import { initializeProskomma } from "proskommaUtils";

const runQuery = async (pk, query, setResult) => {
  console.time("Query");
  try {
    const result = await pk.gqlQuery(query);
    console.timeEnd("Query");
    setResult(JSON.stringify(result, null, 2));
  } catch (error) {
    console.error(error);
  }
};

export const QueryRepl = () => {
  const [pk, setPk] = useState(null);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

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
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />
        </Grid>
        <Grid item lg={6} align="center">
          <Typography variant="h6">Result</Typography>
          <TextField
            multiline
            rows={20}
            fullWidth
            inputProps={{ style: { fontFamily: "monospace" } }}
            value={result}
          />
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={2}>
        <Grid item lg={6} align="center">
          <Button
            variant="contained"
            sx={{ m: 2 }}
            onClick={() => {
              setQuery(gqlPrettier(query));
            }}
          >
            Format Query
          </Button>
        </Grid>
        <Grid item lg={6} align="center">
          <Button
            variant="contained"
            sx={{ m: 2 }}
            onClick={() => {
              runQuery(pk, query, setResult);
            }}
          >
            Run Query
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default QueryRepl;
