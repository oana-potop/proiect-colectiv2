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

const LoginScreen = () => {
  const history = useHistory();

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
        <Typography gutterBottom variant="h4" component="h4">Welcome!</Typography>
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
          />
          <TextField
            id="outlines-basic"
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            style={{marginBottom: "20px", marginTop: "10px"}}
            required
          />
        </Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          onClick={() => {
            history.push("/characters");
          }}
        >
          Sign In
        </Button>
      </Box>
    </Container>
  );
};

export default LoginScreen;
