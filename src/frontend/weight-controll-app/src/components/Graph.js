import Chart from "react-google-charts";
import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Graph() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xl">
      <CssBaseline />
      <div style={{ display: "flex", maxWidth: "xl" }}>
        <Chart
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={[
            [
              { type: "number", label: "x" },
              { type: "number", label: "values" },
              { id: "i0", type: "number", role: "interval" },
              { id: "i1", type: "number", role: "interval" },
              { id: "i2", type: "number", role: "interval" },
              { id: "i2", type: "number", role: "interval" },
              { id: "i2", type: "number", role: "interval" },
              { id: "i2", type: "number", role: "interval" },
            ],
            [1, 100, 90, 110, 85, 96, 104, 120],
            [2, 120, 95, 130, 90, 113, 124, 140],
            [3, 130, 105, 140, 100, 117, 133, 139],
            [4, 90, 85, 95, 85, 88, 92, 95],
            [5, 70, 74, 63, 67, 69, 70, 72],
            [6, 30, 39, 22, 21, 28, 34, 40],
            [7, 80, 77, 83, 70, 77, 85, 90],
            [8, 100, 90, 110, 85, 95, 102, 110],
          ]}
          options={{
            intervals: { style: "sticks" },
            legend: "none",
          }}
        />
      </div>
    </Container>
  );
}
