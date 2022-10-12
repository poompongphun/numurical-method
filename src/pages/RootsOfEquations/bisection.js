import React, { useState as UseState } from "react";
import {
  Button,
  Grid,
  TextField,
  Container,
  Card,
  CardContent,
} from "@mui/material";

const bisection = () => {
  const [xl, setXl] = UseState("");
  const [xr, setXr] = UseState("");
  const [result, setResult] = UseState([]);

  const calcBisection = (xlVal, xrVal) => {
    const fx = (val = 0) => {
      return Math.pow(val, 2) - 5;
    };
    const result = [];
    for (let index = 0; index < 4; index++) {
      let xm = (xlVal + xrVal) / 2;
      let old = 0;
      if (fx(xm) * fx(xrVal) > 0) {
        old = xrVal;
        xrVal = xm;
      } else {
        old = xlVal;
        xlVal = xm;
      }
      result.push(Math.abs((xm - old) / xm));
    }
    setResult(result);
  };

  return (
    <Container>
      <Card>
        <CardContent>
          <h1>Bisection</h1>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="xl"
                variant="outlined"
                sx={{ m: 1, width: "100%" }}
                onChange={(e) => setXl(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="xr"
                variant="outlined"
                sx={{ m: 1, width: "100%" }}
                onChange={(e) => setXr(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                disabled={xl === "" || xr === ""}
                onClick={() => calcBisection(Number(xl), Number(xr))}
              >
                Calculate
              </Button>
            </Grid>
          </Grid>
          <h1>Result</h1>
          {result.map((data, index) => (
            <p key={index}>{data}</p>
          ))}
        </CardContent>
      </Card>
    </Container>
  );
};
export default bisection;
