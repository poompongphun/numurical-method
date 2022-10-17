import React, { useState as UseState } from "react";
import {
  Button,
  Grid,
  TextField,
  Container,
  Card,
  CardContent,
} from "@mui/material";

const falsePostion = () => {
  const [xl, setXl] = UseState("");
  const [xr, setXr] = UseState("");
  const [result, setResult] = UseState([]);

  const calcFalsePostion = (xlVal, xrVal) => {
    const fx = (val = 0) => {
      return 1 / val - 43;
    };
    const result = [];
    for (let i = 0; i < 4; i++) {
      let xm =
        (xlVal * fx(xrVal) - xrVal * fx(xlVal)) / (fx(xrVal) - fx(xlVal));
      const error = fx(xm);
      const text = (
        <div>
          <h3>Iteration {i + 1}</h3>
          <p>
            xm = {xlVal} * {fx(xrVal)} - {xrVal} * {fx(xlVal)} / ({fx(xrVal)} -{" "}
            {fx(xlVal)}) = {xm};
          </p>
          <p>f(xm) = {error}</p>
          <p>error = {Math.abs((xm - xlVal) / xm) * 100}%</p>
        </div>
      );
      result.push(text);
      if (fx(xm) === 0) {
        return xm;
      } else if (fx(xm) * fx(xlVal) < 0) {
        xrVal = xm;
      } else {
        xlVal = xm;
      }
    }
    setResult(result);
  };

  return (
    <Container>
      <Card>
        <CardContent>
          <h1>False Position</h1>
          <p>fx = 1/43</p>
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
                onClick={() => calcFalsePostion(Number(xl), Number(xr))}
              >
                Calculate
              </Button>
            </Grid>
          </Grid>
          <h1>Result</h1>
          {result.map((data, index) => (
            <div key={index}>{data}</div>
          ))}
        </CardContent>
      </Card>
    </Container>
  );
};
export default falsePostion;
