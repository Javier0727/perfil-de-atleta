import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import baseDocument from "../../baseDocument.json";
import { LOGIN_SUCCESS } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { sideImage } from "../../assets/base64/sideImage";
import {
  isAuthenticated,
  loginSuccess,
  userRole,
} from "../../redux/slices/authSlice";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://www.facebook.com/profile.php?id=100001624689766"
      >
        #EasyShet
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Login = () => {
  const isAuthenticatedFlag = useSelector(isAuthenticated);
  const userRoleFlag = useSelector(userRole);

  useEffect(() => {
    if (isAuthenticatedFlag) {
      if (userRoleFlag === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/athlete/dashboard");
      }
    }
  }, [isAuthenticatedFlag]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (email === "oscar@cross.com" && password === "Password123") {
      const user = baseDocument.find((user: any) => user.email === email);
      if (user) {
        dispatch(
          loginSuccess({
            id: user.id,
            name: user.name,
            lastName: user.lasName,
            role: user.role,
            email: user.email,
          })
        );
        dispatch(
          loginSuccess({
            id: user.id,
            name: user.name,
            lastName: user.lasName,
            role: user.role,
            email: user.email,
          })
        );
        navigate("/admin/dashboard");
        return;
      }
    }
    if (email === "javier@cross.com" && password === "Password123") {
      const user = baseDocument.find((user: any) => user.email === email);
      if (user) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            id: user.id,
            name: user.name,
            lastName: user.lasName,
            role: user.role,
            email: user.email,
            parameters: user.parameters,
          },
        });
        navigate("/athlete/dashboard");
        return;
      }
    }
    setError("Invalid email or password");
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${sideImage})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              type="email"
              autoFocus
              value={email}
              onChange={handleEmailChange}
              error={error !== ""}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
              error={error !== ""}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
      <Snackbar
        open={error !== ""}
        autoHideDuration={2000}
        onClose={() => setError("")}
      >
        <Alert
          onClose={() => setError("")}
          severity="error"
          sx={{ width: "100%" }}
        >
          Invalid email or password
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default Login;
