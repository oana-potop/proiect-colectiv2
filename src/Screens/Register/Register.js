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
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebasestuff/firebase-config";

const RegisterScreen = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {/* <Header /> */}
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
          Create a new account
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
        <TextField
            id="outlines-basic"
            label="First Name"
            variant="outlined"
            type="text"
            fullWidth
            margin="normal"
            autoFocus
            required
            onChange={(e) => {setFirstName(e.target.value)}}
          />
          <TextField
            id="outlines-basic"
            label="Last Name"
            variant="outlined"
            type="text"
            fullWidth
            margin="normal"
            autoFocus
            required
            onChange={(e) => {setLastName(e.target.value)}}
          />
          <TextField
            id="outlines-basic"
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            margin="normal"
            autoFocus
            required
            onChange={(e) => {setEmail(e.target.value)}}
          />
          <TextField
            id="outlines-basic"
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            style={{ marginBottom: "20px", marginTop: "10px" }}
            required
            onChange={(e) => {setPassword(e.target.value)}}
          />
        </Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          onClick={() => {
            history.push("/");
            createUserWithEmailAndPassword(auth, email, password);
          }}
        >
          Sign Up
        </Button>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          style = {{backgroundColor: "#212121", color: "white", marginTop: "40px", marginBottom: "20px" }}
          onClick={() => {
            history.push("/");
          }}
        >
          Cancel
        </Button>
      </Box>
    </Container>
  );
};

export default RegisterScreen;
