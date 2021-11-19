import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import ClassPreviewCard from "../../Components/ClassPreviewCard/ClassPreviewCard";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CharacterPreviewCard from "../../Components/CharacterPreviewCard/CharacterPreviewCard";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import CssBaseline from "@mui/material/CssBaseline";
import { DnDLogo } from "../../Assets/assets";
import Header from "../../Components/Header/Header";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebasestuff/firebase-config";

const LoginScreen = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={DnDLogo} width="500" />
        <Typography gutterBottom variant="h4" component="h4">
          Welcome!
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            id="outlines-basic"
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            margin="normal"
            autoFocus
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            id="outlines-basic"
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            style={{ marginBottom: "20px", marginTop: "10px" }}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          onClick={() => {
            try {
              signInWithEmailAndPassword(auth, email, password); //todo: handle error
              console.log("ii bine");
              history.push("/characters");
            } catch {
              console.log("nu-i bine");
            }
          }}
        >
          Sign In
        </Button>
        
          <Typography style = {{marginTop: "60px"}} variant = "overline" >
            Don't have an account? Create a new one!
          </Typography>
          <Button
            fullWidth
            variant="contained"
            style = {{backgroundColor: "#212121", color: "white" }}
            onClick={() => {
              history.push("/register");
            }}
          >
            Register
          </Button>
      </Box>
    </Container>
  );
};

export default LoginScreen;
