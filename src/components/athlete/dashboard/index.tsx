import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import Title from "../../admin/dashboard/Title";
import { useSelector } from "react-redux";
import { athleteParametersData } from "../../../redux/slices/authSlice";

const AthleteDashboardPage = () => {
  const athleteParameters = useSelector(athleteParametersData);
  console.log(athleteParameters);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
          }}
        >
          <Box>
            <Title>Nivel de atleta</Title>
            <Stack
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="100%"
            >
              <Typography
                component="h2"
                variant="h2"
                color="primary"
                gutterBottom
              >
                Elite
              </Typography>
            </Stack>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
          }}
        >
          <Box>
            <Title>Score</Title>
            <Stack
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="100%"
            >
              <Typography component="h2" variant="h2" gutterBottom>
                100
              </Typography>
            </Stack>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Box>
            <Title>Parametros</Title>
            <Grid container spacing={3}>
              {athleteParameters.parameters.map(
                (parameter: {
                  name: string;
                  value: string | number;
                  displayName: string;
                }) => (
                  <Grid item xs={12} md={6} lg={4} key={parameter.name}>
                    <Paper sx={{ p: 2 }}>
                      <Typography component="h2" variant="h6" gutterBottom>
                        {parameter.displayName}
                      </Typography>
                      <Typography component="p" variant="h4">
                        {parameter.value}
                      </Typography>
                    </Paper>
                  </Grid>
                )
              )}
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AthleteDashboardPage;
