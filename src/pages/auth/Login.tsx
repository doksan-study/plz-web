import {
  Container,
  Stack,
  TextField,
  Typography,
  styled,
  Button,
  Link,
  Grid,
  Box,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import { LoadingButton } from "@mui/lab";
import { useDispatch } from "react-redux";
import api, { setToken } from "../../api";
import { useNavigate } from "react-router-dom";
import { setPrincipal } from "../../redux/authReducer";
import Loading from "../../components/Loading";

const LoginContainer = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
}));

// const RegisterButton = styled('')

// FIXME: View
export default () => {
  const dispatch = useDispatch<any>();

  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onChangeEmail = useCallback(
    (e: any) => {
      setEmail(e.target.value);
    },
    [email]
  );

  const onChangePassoword = useCallback(
    (e: any) => {
      setPassword(e.target.value);
    },
    [password]
  );

  const onHandleLogin = async () => {
    try {
      setLoading(true);

      const { data: loginData } = await api.post(`/user/login`, {
        email,
        password,
      });

      const token = loginData.data;
      setToken(token);

      const { data } = await api.get(`/user/me`, {
        headers: { authorization: `Bearer ${token}` },
      });

      const userData = data.data;

      await dispatch(setPrincipal(userData));
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Container component={"main"} maxWidth="xs">
      <LoginContainer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Typography variant="h4" gutterBottom mb={4}>
            Login
          </Typography>
        </Box>

        <TextField
          value={email}
          onChange={onChangeEmail}
          margin="normal"
          label="Email"
          required
          fullWidth
          name="email"
          autoComplete="email"
          autoFocus
        />

        <TextField
          value={password}
          onChange={onChangePassoword}
          margin="normal"
          label="Password"
          type={"password"}
          required
          fullWidth
          name="passoword"
          autoComplete="password"
        />

        <LoadingButton
          onClick={() => onHandleLogin()}
          fullWidth
          size="large"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Login
        </LoadingButton>

        <Grid container>
          <Grid item xs>
            <Link>Forgot Password?</Link>
          </Grid>
          <Grid item>
            <Link>SignUp</Link>
          </Grid>
        </Grid>
      </LoginContainer>
    </Container>
  );
};
