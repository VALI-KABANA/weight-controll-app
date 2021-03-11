import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import loginUser from "../actionTypes"
import store from "../index.js"
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Команда VALI KABANA
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(){
  const classes = useStyles()
  const [state, setState] = useState({
    login: '',
    password: ''
  });
  const handleChange = e =>{
    // console.log(state)
    setState({...state, [e.target.name]: e.target.value})
  }
    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline/>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
              Вход
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                  value={state.login}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="login"
                  label="Логин"
                  name="login"
                  autoComplete="email"
                  autoFocus
              />
              <TextField
                  value={state.password}
                  onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Пароль"
                  type="password"
                  id="password"
                  autoComplete="current-password"
              />
              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={() => {store.dispatch(loginUser(state))}}
              >
                Войти
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Забыли пароль :(?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="SignUp" variant="body2">
                    {"Создать новый аккаунт?"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
            <Copyright/>
          </Box>
        </Container>
    );
}
