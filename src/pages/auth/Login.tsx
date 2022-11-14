import { Container, Stack, TextField, Typography, styled } from "@mui/material";
import React, { useCallback, useState } from "react";
import { LoadingButton } from "@mui/lab";
import { useDispatch } from "react-redux";
import api from "../../api";
import { useNavigate } from "react-router-dom";

const StyledContent = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
}));

export default () => {
  const dispatch = useDispatch<any>();

  const navigation = useNavigate();

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

      const res = await api.post(`/user/login`, {
        email,
        password,
      });

      console.log("data: ", res);

      // 리덕스에 저장 및 쿠키 저장
      // navigation("/");
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>...</div>;
  }

  return (
    <Container>
      <StyledContent>
        <Typography variant="h4" gutterBottom mb={8}>
          Login
        </Typography>

        <Stack spacing={3} mb={5}>
          <TextField
            name="email"
            label="Email"
            value={email}
            onChange={onChangeEmail}
          />
          <TextField
            name="password"
            label="Password"
            value={password}
            onChange={onChangePassoword}
          />
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          onClick={onHandleLogin}
        >
          Login
        </LoadingButton>
      </StyledContent>
    </Container>
  );
};

// const LoginContainer = styled.div`
//   max-width: 480px;
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   background-color: gray;
// `;
