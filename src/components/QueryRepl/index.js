import { Grid, Container, Typography, TextField } from "@mui/material";

export const QueryRepl = () => {
  return (
    <Container>
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
